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
    formClassName = "min-h-[415px] h-full xl:h-full border border-gray-300 overflow-hidden",
}: RegisterProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [loadingProvider, setLoadingProvider] = useState<"google" | "facebook" | null>(null);
    const googleWrapperRef = useRef<HTMLDivElement | null>(null);
    const [googleWidth, setGoogleWidth] = useState<number | undefined>(undefined);
    console.log("ds",googleWidth);
    
    useEffect(() => {
        const element = googleWrapperRef.current;
        if (!element) return;

        const compute = () => {
            const containerWidth = element.clientWidth;
            // Clamp to GIS allowed range roughly [200, 400]
            const desired = Math.max(215, Math.min(380, containerWidth));
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
            className={clsx("flex flex-col h-full p-4", formClassName)}>
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
                        aria-label="Enter your full name"
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
                        aria-label="Enter your email address"
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
                            aria-label="Enter your 9-digit mobile number"
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
                            aria-label="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute top-1 right-2 text-gray-500"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>
                    {errorText("password")}
                </div>
                {/* Buttons */}
                <div className="w-full mt-4 ">
                    <div className="flex flex-col sm:flex-row gap-4 w-full items-center sm:items-stretch">
                        {/* Google Login Button */}
                        <div className="w-full sm:w-auto flex justify-center sm:justify-start" ref={googleWrapperRef}>
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

                        {/* Facebook Login Button */}
                        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                            <FacebookLoginButton
                                className={clsx(
                                    "h-10 min-h-[40px] py-2 px-4 border border-gray-200 text-sm font-medium flex items-center justify-center gap-2 sm:w-auto transition-colors duration-150 hover:bg-gray-50"
                                )}
                                style={{ width: "100%",maxWidth: googleWidth ? `${googleWidth}px` : undefined }}
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
                </div>

                {/* Submit & Previous Buttons */}
                <div className="w-full mt-6">
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-between">
                        <Button
                            onClick={handlePrev}
                            className="w-full sm:w-auto h-10 bg-[var(--secondary-color)] border text-sm text-white hover:bg-white hover:text-[var(--secondary-color)] transition-colors duration-150"
                            aria-label="Go to previous step"
                        >
                            Previous
                        </Button>
                        <Button
                            onClick={formik.submitForm}
                            className="w-full sm:w-auto h-10 bg-[var(--primary-color)] border text-sm text-white hover:bg-white hover:text-[var(--primary-color)] transition-colors duration-150"
                            aria-label="Submit registration and request"
                        >
                            Submit
                        </Button>
                    </div>
                </div>

            </div>
        </form>
    );
}
