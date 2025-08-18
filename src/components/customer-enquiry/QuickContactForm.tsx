import { RequestItemFormData } from "@/core/models/requestItem/request-item.model";
import { useState, useCallback, useMemo } from "react";
import Register from "../requestItem/Register";
import { toast } from "react-toastify";
import { authService } from "@/core/services/authService";
import { tokenService } from "@/core/services/token.service";
import { detectMobileOS } from "@/lib/utils";
import Button from "../ui/Button";
import { businessService } from "@/core/services/businessService";
import CustomerItemRequire from "./CustomerItemRequire";

interface QuickContactFormProps {
    companyId: number;
    formClassName?: string;
}

const initialFormState: RequestItemFormData = {};


const QuickContactForm = ({ companyId, formClassName }: QuickContactFormProps) => {

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

    const postRequest = async (data: RequestItemFormData) => {

        try {
            const result = await businessService.addCustomerEnquiry({
                enquiryTitle: data.item,
                enquiryDescription: data.description,
                companyId: companyId,
            });
            if (result?.success) {
                setCurrentStep(1)
                toast.success(result?.message)
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

    const handleSubmit = async (finalData: Partial<RequestItemFormData>) => {
        const data = { ...formData, ...finalData };
        const token = "Basic " + window.btoa(`${data.email}:${data.password}`);

        try {
            const isEmailExists = await authService.emailCheck(data.email ?? '');
            if (isEmailExists === true) {
                const loginData = await authService.login(token);
                if (loginData && loginData?.token) {
                    tokenService.setLoggedUserDetail(loginData.token, loginData.tokenExpires, loginData.firstName, loginData.lastName);

                    if (await postRequest(data)) setCurrentStep(3);
                }
                return;
            }

            const isMobileExists = await authService.mobileCheck(data.mobile ?? '');
            if (isMobileExists !== true) {
                console.warn("Mobile already exists or invalid.");
                return;
            }

            const registerResult = await authService.registerUser({
                email: data.email ?? "",
                contactNo: data.mobile ?? "",
                userName: data.name ?? "",
                password: data.password ?? "",
                firstName: data.name ?? "",
                lastName: "",
                provinceID: data.provinceId ?? 0,
                cityID: data.cityId ?? 0,
                suburbID: data.suburbId ?? 0,
                domainUrl: "2",
                track: 1
            }, detectMobileOS() === "Unknown" ? 1 : 0);

            if (registerResult?.token) {
                const loginData = await authService.login(token);
                if (loginData && loginData?.token) {
                    tokenService.setLoggedUserDetail(loginData.token, loginData.tokenExpires, loginData.firstName, loginData.lastName);

                    if (await postRequest(data)) setCurrentStep(6);
                }
            }
        } catch (error) {
            console.error("Submission Error:", error);
        }
    };

    const steps = useMemo(() => [
        <CustomerItemRequire
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
            key="step-2"
            onUpdate={handleUpdate}
            handleSubmit={handleSubmit}
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

                <div className="h-full md:px-1 md:pt-1 max-md:mx-[15px] mt-2 md:mt-0">
                    {steps[currentStep - 1]}
                </div>
            </div>
        </>
    )
}
export default QuickContactForm