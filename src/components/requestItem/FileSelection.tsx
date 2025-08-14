import {
  faClose,
  faCloudUploadAlt,
  faFileAlt,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Image from "next/image";
import { FileUploadFormData } from "@/core/models/requestItem/request-item.model";
import Button from "../ui/Button";
import clsx from "clsx";


const MAX_FILE_COUNT = 15;
const MAX_FILE_SIZE_MB = 20;

const validationSchema = Yup.object({
  upload: Yup.array()
    
});

interface FileSelectionProps {
  onUpdate: (data: FileUploadFormData) => void;
  handleNext: () => void;
  handlePrev: () => void;
  initialValues: FileUploadFormData;
  formClassName?: string;
}

export default function FileSelection({
  onUpdate,
  handleNext,
  handlePrev,
  initialValues,
  formClassName = "h-[415px] xl:h-full border border-gray-300",
}: FileSelectionProps) {
  const [files, setFiles] = useState<File[]>(initialValues.upload || []);
  const [previews, setPreviews] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const formik = useFormik<FileUploadFormData>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onUpdate(values);
      handleNext();
    },
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
  });

  useEffect(() => {
    const newPreviews = files.map((file) =>
      file.type.startsWith("image/") ? URL.createObjectURL(file) : ""
    );
    setPreviews(newPreviews);
    return () => {
      newPreviews.forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [files]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg(null);
    const selectedFiles = Array.from(e.target.files || []);

    const validFiles: File[] = [];
    const errors: string[] = [];

    if (files.length + selectedFiles.length > MAX_FILE_COUNT) {
      errors.push(`You can upload up to ${MAX_FILE_COUNT} files only.`);
    }

    selectedFiles.forEach((file) => {
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        errors.push(`File "${file.name}" exceeds the 20MB limit.`);
      } else {
        validFiles.push(file);
      }
    });

    if (errors.length > 0) {
      setErrorMsg(errors.join(" "));
      return;
    }

    const newFiles = [...files, ...validFiles];
    setFiles(newFiles);
    formik.setFieldValue("upload", newFiles);
  };

  const handleDelete = (index: number) => {
    const updatedFiles = files.filter((_, idx) => idx !== index);
    const updatedPreviews = previews.filter((_, idx) => idx !== index);
    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
    formik.setFieldValue("upload", updatedFiles);
  };

  const handleNextStep = async () => {
    formik.setFieldTouched("upload", true);
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      await formik.submitForm();
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={clsx("p-4 xl:p-2 2xl:p-3", formClassName)}
    >
      <div className="flex flex-col h-full">
        <div>
          <p className="text-md xl:text-sm 2xl:text-lg font-semibold">Upload Image</p>
          <div className="form-group mb-2">
            <label htmlFor="upload">
              <div className="border border-gray-300 w-full h-[7rem] flex flex-col justify-center items-center text-sm text-gray-500 cursor-pointer">
                <FontAwesomeIcon icon={faCloudUploadAlt} className="text-lg" />
                Click to upload
              </div>
            </label>
            <input
              type="file"
              id="upload"
              multiple
              accept="image/*,application/pdf"
              onChange={handleUpload}
              className="hidden"
            />
            <p className="text-sm mt-2">
              <span className="text-primary">Note:</span> File size cannot be more than 20MB. Max {MAX_FILE_COUNT} files.
            </p>

            {errorMsg && (
              <p className="text-sm text-red-600 mt-1">{errorMsg}</p>
            )}
            {formik.touched.upload && formik.errors.upload && (
              <p className="text-sm text-red-600 mt-1">
                {typeof formik.errors.upload === "string"
                  ? formik.errors.upload
                  : (formik.errors.upload as string[]).join(", ")}
              </p>
            )}
          </div>

          {files.length > 0 && (
            <div className="mt-3 mb-3">
              <div className="flex gap-3 overflow-x-auto pb-1">
                {files.map((file, idx) => (
                  <div
                    key={idx}
                    className="relative min-w-[60px] w-[60px] h-[60px] border rounded-md bg-white shadow-sm flex-shrink-0 flex items-center justify-center"
                  >
                    {previews[idx] ? (
                      <Image
                        src={previews[idx]}
                        alt="Preview"
                        width={60}
                        height={60}
                        className="object-contain p-1 w-full h-full"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={file.type === "application/pdf" ? faFilePdf : faFileAlt}
                        className="text-xl text-gray-600"
                      />
                    )}

                    <button
                      type="button"
                      onClick={() => handleDelete(idx)}
                      className="absolute top-0 right-0 p-[2px] text-gray-800 hover:text-red-600"
                    >
                      <FontAwesomeIcon icon={faClose} className="text-[12px]" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-auto">
          <Button
            onClick={handlePrev}
            className="bg-[var(--secondary-color)] border text-sm text-white hover:bg-white hover:text-[var(--secondary-color)]"
          >
            Previous
          </Button>
          <Button
            onClick={handleNextStep}
            className="bg-[var(--primary-color)] border text-sm text-white hover:bg-white hover:text-[var(--primary-color)]"
          >
            Next
          </Button>
        </div>
      </div>
    </form>
  );
}
