import { RequestItemFormData } from "@/core/models/requestItem/request-item.model";
import { useCallback, useMemo, useState } from "react";
import Button from "../ui/Button";
import Register from "../requestItem/Register";
import JobTitleDescription from "./JobTitleDescription";
import { toast } from "react-toastify";
import FileSelection from "../requestItem/FileSelection";
import { customerEnquiryService } from "@/core/services/EnquiryService";

interface ApplyJobFormProps {
    postTitle: string;
    postId: number;
    formClassName?: string;
}

const initialFormState: RequestItemFormData = {};


const ApplyJobForm = ({ postTitle, postId, formClassName }: ApplyJobFormProps) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<RequestItemFormData>(initialFormState);


    const handleNext = () => setCurrentStep((prev) => prev + 1);
    const handlePrev = () => setCurrentStep((prev) => Math.max(1, prev - 1));

    const handleUpdate = useCallback(
        (newData: Partial<RequestItemFormData>) => {
            setFormData((prev) => ({ ...prev, ...newData }));
        },
        []
    );
    // const fileToBase64 = (file: File): Promise<string> => {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             resolve(reader.result as string);
    //         };
    //         reader.onerror = reject;
    //         reader.readAsDataURL(file);
    //     });
    // };

    const postRequest = async (data: RequestItemFormData) => {

        try {
            // const base64Files = formData.upload
            //     ? await Promise.all(formData.upload.map(fileToBase64))
            //     : [];

            // const postReplyAttachments = base64Files.map((base64) => ({
            //     thumbNailImagePath: base64,
            //     postReplyAttachmentId: 0
            // }));
            const result = await customerEnquiryService.applyJob({
                title: formData.item,
                description: formData.description,
                postId: postId,
                titleCategoryId: data.categoryId,
                // postReplyAttachments: postReplyAttachments.length ? postReplyAttachments : null,
            });
            if (result?.success) {
                toast.success(result?.message || "Successfully Applied")
            }
            return result?.success ?? false;
        } catch (error) {
            console.error("Failed to submit item request", error);
            return false;
        }
    };

    const resetForm = () => {
        setFormData(initialFormState);
        setCurrentStep(1);
    };

    const handleRegisterComplete = async (result: boolean, finalData: RequestItemFormData) => {
        if (result) {
            const success = await postRequest(finalData);
            if (success) setCurrentStep(4);
        }
    };

    const steps = useMemo(() => [
        <JobTitleDescription
            key='step-1'
            onUpdate={handleUpdate}
            handleNext={handleNext}
            formClassName={formClassName}
            initialValues={{
                item: postTitle || formData.item,
                description: formData.description || ''
            }}
        />,
        <FileSelection
            key="step-2"
            onUpdate={handleUpdate}
            handleNext={handleNext}
            handlePrev={handlePrev}
            formClassName={formClassName}
            initialValues={{ upload: formData.upload || [] }}
        />,
        <Register
            key="step-3"
            onUpdate={handleUpdate}
            onComplete={handleRegisterComplete}
            handlePrev={handlePrev}
            formClassName={formClassName}
            initialValues={{
                name: formData.name,
                password: formData.password,
                email: formData.email,
                mobile: formData.mobile,
            }}
        />,
        <div key="step-4" className="text-center">
            <h2 className="text-2xl font-bold">Thank You!</h2>
            <p>Your request has been submitted successfully.</p>
            <Button
                onClick={resetForm}
                className="!bg-[var(--primary-color)] border border-[var(--primary-color)] text-sm text-white hover:!bg-white hover:!text-[var(--primary-color)]"
            >
                Submit Another Request
            </Button>
        </div>,
    ], [formData])

    return (
        <>
            <div className="xl:absolute w-full top-0 xl:-top-12 h-full">

                <div className="h-full md:px-1 md:pt-1 max-md:mx-[15px] mt-2 md:mt-0">
                    {steps[currentStep - 1]}
                </div>
            </div>
        </>
    )
}
export default ApplyJobForm