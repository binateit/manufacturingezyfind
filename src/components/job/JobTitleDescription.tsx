import { useFormik } from "formik";
import { FC, useCallback } from "react";
import { ItemDetailsFormData } from "@/core/models/requestItem/request-item.model";
import { ItemRequiredSchema } from "@/core/validators/request-item.schema";
import Button from "../ui/Button";
import clsx from "clsx";


interface JobTitleDescriptionProps {
    onUpdate: (data: ItemDetailsFormData) => void;
    handleNext: () => void;
    initialValues: ItemDetailsFormData;
    formClassName?: string;
}

export const JobTitleDescription: FC<JobTitleDescriptionProps> = ({
    onUpdate,
    handleNext,
    initialValues,
    formClassName = "h-[415px] xl:h-full border border-gray-300",
}) => {
    const formik = useFormik({
        initialValues,
        validationSchema: ItemRequiredSchema,
        onSubmit: (values) => {
            onUpdate(values);
            handleNext();
        },
        enableReinitialize: true,
    });

    const handleNextStep = async () => {
        formik.setTouched({ item: true, description: true });
        const errors = await formik.validateForm();
        if (Object.keys(errors).length === 0) {
            formik.submitForm();
        }
    };

    const showError = useCallback(
        (field: keyof ItemDetailsFormData) =>
            (formik.touched[field] || formik.submitCount > 0) && formik.errors[field],
        [formik]
    );

    const labelClass =
        "block text-sm xl:text-xs 2xl:text-sm font-medium mb-2 xl:mb-1 2xl:mb-2";
    const inputClass =
        "form-control border border-gray-300 text-sm xl:text-xs w-full px-3 font-semibold text-gray-500";

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className={clsx("p-4 xl:p-2 2xl:p-3", formClassName)}
        >
            <div className="h-full flex flex-col">
                <div>


                    {/* Item Input */}
                    <div className="mb-3 xl:mb-2 2xl:mb-3">
                        <label htmlFor="item" className={labelClass}>
                            Title
                        </label>
                        <input
                            type="text"
                            id="item"
                            name="item"
                            value={formik.values.item}
                            onChange={formik.handleChange}
                            className={`${inputClass} h-8`}
                            placeholder="Item"
                        />
                        {showError("item") && (
                            <p className="text-sm text-red-600 mt-1">{formik.errors.item}</p>
                        )}
                    </div>

                    {/* Description Input */}
                    <div className="mb-4">
                        <label htmlFor="description" className={labelClass}>
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            className={`${inputClass} py-3`}
                            rows={3}
                            placeholder="Description"
                        />
                        {showError("description") && (
                            <p className="text-sm text-red-600 mt-1">
                                {formik.errors.description}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex justify-end mt-auto">
                    <Button
                        onClick={handleNextStep}
                        className="bg-[var(--primary-color)] border border-[var(--primary-color)] text-sm text-white hover:bg-white hover:text-[var(--primary-color)]"
                    >
                        Next
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default JobTitleDescription