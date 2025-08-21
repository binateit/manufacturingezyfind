"use client";

import React, { useCallback, useState } from "react";
import { Button } from "primereact/button";
import { RequestItemFormData } from "@/core/models/requestItem/request-item.model";
import { ItemRequired } from "./ItemRequired";
import CategorySelection from "./CategorySelection";
import LocationSelection from "./LocationSelection";
import FileSelection from "./FileSelection";
import Register from "./Register";
import { authService } from "@/core/services/authService";
import { toast } from "react-toastify";

interface RequestItemFormProps {
  formClassName?: string;
  itemData?: {
    title?: string;
    description?: string | null;
    category?: string;
  };
}

export default function RequestItemForm({ formClassName , itemData }: RequestItemFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RequestItemFormData>({
    item: itemData?.title || "",
    description: itemData?.description || "",
    categoryId: undefined,
    provinceId: undefined,
    cityId: undefined,
    suburbId: undefined,
    upload: [],
    name: "",
    password: "",
    email: "",
    mobile: "",
  });

  const resetForm = () => {
    setFormData(formData);
    setCurrentStep(1);
  };

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

  const postRequest = async () => {
    // const files = data.upload
    //   ? await Promise.all(
    //     data.upload.map(async (file) => {
    //       const base64 = await fileToBase64(file);
    //       return {
    //         thumbNailImagePath: base64,
    //         fileName: file.name,
    //         fileType: file.type,
    //       };
    //     })
    //   )
    //   : [];

    try {
      const result = await authService.postItemRequest({
        itemRequestTitle: formData.item,
        itemRequestDescription: formData.description,
        categoryId: formData.categoryId,
        suburbId: formData.suburbId,
        provinceId: formData.provinceId,
        cityId: formData.cityId,
      });
      if (result?.success) {
        setCurrentStep(1)
        toast.success("Successfully submitted the item request")
      }
      return result?.success ?? false;
    } catch (error) {
      console.error("Failed to submit item request", error);
      return false;
    }
  };

  const handleRegisterComplete = async (result: boolean) => {
    if (result) {
      const success = await postRequest();
      if (success) setCurrentStep(6);
    }
  };


  const steps = [
    <ItemRequired
      key="step-1"
      onUpdate={handleUpdate}
      handleNext={handleNext}
      formClassName={formClassName}
      initialValues={{
        item: formData.item || itemData?.title || "" ,
        description: formData.description || itemData?.description || "",
      }}
    />,
    <CategorySelection
      key="step-2"
      onUpdate={handleUpdate}
      handleNext={handleNext}
      handlePrev={handlePrev}
      formClassName={formClassName}
      initialValues={{ categoryId: formData.categoryId }}
    />,
    <LocationSelection
      key="step-3"
      onUpdate={handleUpdate}
      handleNext={handleNext}
      handlePrev={handlePrev}
      formClassName={formClassName}
      initialValues={{
        provinceId: formData.provinceId,
        cityId: formData.cityId,
        suburbId: formData.suburbId,
      }}
    />,
    <FileSelection
      key="step-4"
      onUpdate={handleUpdate}
      handleNext={handleNext}
      handlePrev={handlePrev}
      formClassName={formClassName}
      initialValues={{ upload: formData.upload || [] }}
    />,
    <Register
      displayName={true}
      key="step-5"
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
    <div key="step-6" className="text-center">
      <h2 className="text-2xl font-bold">Thank You!</h2>
      <p>Your request has been submitted successfully.</p>
      <Button
        onClick={resetForm}
        className="!bg-[var(--primary-color)] border border-[var(--primary-color)] text-sm text-white hover:!bg-white hover:!text-[var(--primary-color)]"
      >
        Submit Another Request
      </Button>
    </div>,
  ];

  return (
    <div className="xl:absolute w-full top-0 xl:-top-12 h-full">
      <div className="hidden xl:flex h-9 md:h-12 bg-primary text-white text-md items-center pl-4 font-semibold relative z-1 before:absolute before:h-full before:w-full before:-left-50 before:top-0 before:bg-[var(--primary-color)] before:-z-1 triangle">
        Request An Item Here!
      </div>
      <div className="h-full md:px-1 md:pt-1 max-md:mx-[15px] mt-2 md:mt-0">
        {steps[currentStep - 1]}
      </div>
    </div>
  );
}
