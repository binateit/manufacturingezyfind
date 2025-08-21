import { RequestItemFormData } from "@/core/models/requestItem/request-item.model";
import { useState, useCallback, useMemo } from "react";
import Register from "../requestItem/Register";
import { toast } from "react-toastify";
import Button from "../ui/Button";
import CustomerEnquiry from "./CustomerEnquiry";
import { customerEnquiryService } from "@/core/services/EnquiryService";

interface QuickContactFormProps {
    companyId: number;
    companyName?: string;
    formClassName?: string;
}

const initialFormState: RequestItemFormData = {};


const QuickContactForm = ({ companyId, formClassName, companyName }: QuickContactFormProps) => {

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

    const postRequest = async () => {
        try {
            const result = await customerEnquiryService.addCustomerEnquiry({
                enquiryTitle: formData.item,
                enquiryDescription: formData.description,
                companyId: companyId,
            });

            if (result?.success) {
                toast.success(result?.message);
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

    const handleRegisterComplete = async (result: boolean) => {
        if (result) {
            const success = await postRequest();
            if (success) setCurrentStep(3);
        }
    };



    const steps = useMemo(() => [
        <CustomerEnquiry
            key='step-1'
            onUpdate={handleUpdate}
            handleNext={handleNext}
            formClassName={formClassName}
            initialValues={{
                item: formData.item || '',
                description: formData.description || ''
            }}
        />,
        <Register
            displayName={false}
            key="step-2"
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
        <div key="step-3" className="text-center">
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
                <div className="h-full md:px-1 md:pt-1 max-md:mx-[15px] mt-2 md:mt-0 mb-3">
                    Requesting more detail for - {companyName}
                </div>
                <div className="h-full md:px-1 md:pt-1 max-md:mx-[15px] mt-2 md:mt-0">
                    {steps[currentStep - 1]}
                </div>
            </div>
        </>
    )
}
export default QuickContactForm