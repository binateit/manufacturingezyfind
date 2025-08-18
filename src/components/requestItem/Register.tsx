import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { RequestItemFormData, UserRegistrationFormData } from "@/core/models/requestItem/request-item.model";
import clsx from "clsx";
import FacebookLoginButton from "../shared/FacebookLoginButton";
import GoogleLoginButton from "../shared/GoogleLoginButton";
import { toast } from "react-toastify";
import { authService } from "@/core/services/authService";
import { tokenService } from "@/core/services/token.service";
import { detectMobileOS } from "@/lib/utils";


const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    password: Yup.string()
        .matches(/^(?=.*[A-Z])(?=.*\d).*$/, "Include at least one capital letter and one number")
        .required("Password is required"),
    email: Yup.string()
        .email("Invalid email")
        .matches(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, "Provide proper email")
        .required("Email is required"),
    mobile: Yup.string()
        .matches(/^\d{9}$/, "Enter 9-digit mobile number")
        .required("Mobile number is required"),
});

interface RegisterProps {
    onUpdate: (data: UserRegistrationFormData) => void;
    handlePrev: () => void;
    displayName?: boolean;
    onComplete: (result: boolean, finalData: RequestItemFormData) => void;
    initialValues: UserRegistrationFormData;
    formClassName?: string;
}

export default function Register({
    onUpdate,
    handlePrev,
    onComplete,
    displayName,
    initialValues,
    formClassName = "h-[415px] xl:h-full border border-gray-300",
}: RegisterProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [loadingProvider, setLoadingProvider] = useState<"google" | "facebook" | null>(null);
    const googleWrapperRef = useRef<HTMLDivElement | null>(null);
    const [googleWidth, setGoogleWidth] = useState<number | undefined>(undefined);
    useEffect(() => {
        const element = googleWrapperRef.current;
        if (!element) return;

        const compute = () => {
            const containerWidth = element.clientWidth;
            // Clamp to GIS allowed range roughly [200, 400]
            const desired = Math.max(220, Math.min(380, containerWidth));
            setGoogleWidth(Math.floor(desired));
        };

        compute();
        const ro = new ResizeObserver(compute);
        ro.observe(element);
        window.addEventListener('resize', compute);
        return () => {
            ro.disconnect();
            window.removeEventListener('resize', compute);
        };
    }, []);
    const handleSubmit = async (data: RequestItemFormData) => {
        const token = "Basic " + window.btoa(`${data.email}:${data.password}`);

        try {
            const isEmailExists = await authService.emailCheck(data.email ?? '');
            if (isEmailExists === true) {
                const loginData = await authService.login(token);
                if (loginData?.token) {
                    tokenService.setLoggedUserDetail(loginData.token, loginData.tokenExpires, loginData.firstName, loginData.lastName);
                    onComplete(true, data);
                    return;
                }
                onComplete(false, data);
                return;
            }

            const isMobileExists = await authService.mobileCheck(data.mobile ?? '');
            if (isMobileExists !== true) {
                console.warn("Mobile already exists or invalid.");
                onComplete(false, data);
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
                if (loginData?.token) {
                    tokenService.setLoggedUserDetail(loginData.token, loginData.tokenExpires, loginData.firstName, loginData.lastName);
                    onComplete(true, data);
                    return;
                }
            }

            onComplete(false, data);
        } catch (error) {
            console.error("Submission Error:", error);
            onComplete(false, data);
        }
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            onUpdate(values);
            await handleSubmit(values);
        },
        validateOnChange: true,
        validateOnBlur: true,
    });

    const labelClass = "block text-sm font-medium mb-2";
    const inputClass = "form-control border border-gray-300 text-sm w-full h-8 px-3 font-semibold text-gray-500";

    const errorText = (field: keyof typeof formik.values) =>
        formik.touched[field] && formik.errors[field] ? (
            <p className="text-sm text-red-600 mt-1">{formik.errors[field]}</p>
        ) : null;

    const togglePasswordVisibility = () => setShowPassword(prev => !prev);

    return (
        <form onSubmit={(e) => e.preventDefault()}
            className={clsx("p-4", formClassName)}>
            <div className="flex flex-col h-full">
                <p className="text-md font-semibold">Register</p>
                <p className="text-sm text-[var(--primary-color)] mb-3 font-normal">Fill input fields</p>

                {/* Name */}
                {displayName && (<div className="mb-3">
                    <label className={labelClass}>Name</label>
                    <input
                        type="text"
                        {...formik.getFieldProps("name")}
                        className={inputClass}
                        placeholder="Enter Name"
                    />
                    {errorText("name")}
                </div>)}



                {/* Email */}
                <div className="mb-3">
                    <label className={labelClass}>Email</label>
                    <input
                        type="email"
                        {...formik.getFieldProps("email")}
                        className={inputClass}
                        placeholder="Enter email address"
                    />
                    {errorText("email")}
                </div>

                {/* Mobile with country code */}
                <div className="mb-5">
                    <label className={labelClass}>Mobile Number</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm font-semibold border border-gray-300 bg-gray-100 text-gray-700">
                            +27
                        </span>
                        <input
                            type="text"
                            {...formik.getFieldProps("mobile")}
                            className="form-control border border-gray-300 text-sm w-full h-8 px-3 font-semibold text-gray-500"
                            placeholder="Enter 9-digit mobile number"
                        />
                    </div>
                    {errorText("mobile")}
                </div>

                {/* Password with toggle */}
                <div className="mb-3">
                    <label className={labelClass}>Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            {...formik.getFieldProps("password")}
                            className={`${inputClass} pr-10`}
                            placeholder="Enter Password"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute top-1 right-2 text-gray-500"
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>
                    {errorText("password")}
                </div>
                {/* Buttons */}
                <div className="flex justify-between mt-auto">
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch">
                        <div className="w-full flex justify-center sm:justify-start" ref={googleWrapperRef}>
                            <GoogleLoginButton
                                onSuccess={(res) => {
                                    if (res.credential) {
                                        setLoadingProvider("google");
                                        // handleSsoLogin(`Bearer ${res.credential}`);
                                    } else {
                                        toast.error("Google did not return a credential");
                                    }
                                }}
                                onError={(reason) => toast.error(reason)}
                                theme="outline"
                                size="large"
                                text="continue_with"
                                width={googleWidth}
                            />
                        </div>

                        <FacebookLoginButton
                            className={clsx(
                                "h-10 py-2 px-4 border border-gray-200 text-sm flex items-center justify-center gap-2 w-full transition-all delay-100 hover:bg-gray-50"
                            )}
                            style={{ width: "100%", maxWidth: googleWidth ? `${googleWidth}px` : undefined }}
                            text={loadingProvider === 'facebook' ? 'Connecting...' : 'Continue with Facebook'}
                            onSuccess={(res) => {
                                const accessToken = (res as unknown as { accessToken?: string }).accessToken;
                                if (accessToken) {
                                    setLoadingProvider("facebook");
                                    // handleSsoLogin(`Bearer ${accessToken}`);
                                } else {
                                    toast.error("Facebook did not return an access token");
                                }
                            }}
                            onError={(reason) => toast.error(reason)}
                            scope="public_profile,email"
                        />
                    </div>
                </div>
                <div className="flex justify-between mt-auto">
                    <Button
                        onClick={handlePrev}
                        className="bg-[var(--secondary-color)] border text-sm text-white hover:bg-white hover:text-[var(--secondary-color)]"
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={formik.submitForm}
                        className="bg-[var(--primary-color)] border text-sm text-white hover:bg-white hover:text-[var(--primary-color)]"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </form>
    );
}
