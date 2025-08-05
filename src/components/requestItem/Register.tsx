import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { UserRegistrationFormData } from "@/core/models/requestItem/request-item.model";


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
    handleSubmit: (data: UserRegistrationFormData) => void;
    initialValues: UserRegistrationFormData;
}

export default function Register({
    onUpdate,
    handlePrev,
    handleSubmit,
    initialValues
}: RegisterProps) {
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            onUpdate(values);
            handleSubmit(values);
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
        <form onSubmit={(e) => e.preventDefault()} className="h-[415px] xl:h-full p-4 border border-gray-300">
            <div className="flex flex-col h-full">
                <p className="text-md font-semibold">Register</p>
                <p className="text-sm text-[var(--primary-color)] mb-3 font-normal">Fill input fields</p>

                {/* Name */}
                <div className="mb-3">
                    <label className={labelClass}>Name</label>
                    <input
                        type="text"
                        {...formik.getFieldProps("name")}
                        className={inputClass}
                        placeholder="Enter Name"
                    />
                    {errorText("name")}
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

                {/* Buttons */}
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
