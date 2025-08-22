import { useFormik } from "formik";
import { FC, useCallback } from "react";
import { ItemDetailsFormData } from "@/core/models/requestItem/request-item.model";
import { ItemRequiredSchema } from "@/core/validators/request-item.schema";
import Button from "../ui/Button";
import clsx from "clsx";


interface ItemRequiredProps {
    onUpdate: (data: ItemDetailsFormData) => void;
    handleNext: () => void;
    initialValues: ItemDetailsFormData;
    formClassName?: string;
}

export const ItemRequired: FC<ItemRequiredProps> = ({
    onUpdate,
    handleNext,
    initialValues,
    formClassName 
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
                    <p className="text-md xl:text-sm 2xl:text-lg font-semibold">
                        Submit RFQ or RFP
                    </p>
                    <p className="text-sm xl:text-xs 2xl:text-sm text-[var(--primary-color)] mb-3 font-normal">
                        Submit one Request and obtain multiple quotes
                    </p>

                    {/* Item Input */}
                    <div className="mb-3 xl:mb-2 2xl:mb-3">
                        <label htmlFor="item" className={labelClass}>
                            Item Required
                        </label>
                        <input
                            type="text"
                            id="item"
                            name="item"
                            value={formik.values.item}
                            onChange={formik.handleChange}
                            className={`${inputClass} h-8`}
                            placeholder="Item Required"
                            aria-label="Item required for request"
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
                            aria-label="Description of the item required"
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
                        aria-label="Proceed to next step"
                    >
                        Next
                    </Button>
                </div>
            </div>
        </form>
    );
};
