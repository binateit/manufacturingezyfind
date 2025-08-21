import { useMemo } from "react";
import { useFormik } from "formik";
import clsx from "clsx";
import { useQuery } from "@apollo/client";
import { Dropdown } from "primereact/dropdown";
import { ItemCategoryFormData } from "@/core/models/requestItem/request-item.model";
import { GET_CATEGORY_BY_PARENTID } from "@/core/graphql/queries/getCategories";
import { ENV } from "@/core/config/env";
import { SelectOptionNumber } from "@/core/models/shared/selectOption";
import { Category } from "@/core/models/categories/category";
import { CategorySelectionSchema } from "@/core/validators/request-item.schema";
import Button from "../ui/Button";


interface CategorySelectionProps {
    onUpdate: (data: ItemCategoryFormData) => void;
    handleNext: () => void;
    handlePrev: () => void;
    initialValues: ItemCategoryFormData;
    formClassName?: string;
    categoryName?: string;
}

export default function CategorySelection({
    onUpdate,
    handleNext,
    handlePrev,
    initialValues,
    categoryName,
    formClassName = "h-[415px] xl:h-full border border-gray-300",
}: CategorySelectionProps) {

    const { data: categoryData, loading } = useQuery(GET_CATEGORY_BY_PARENTID, {
        variables: { id: Number(ENV.CATEGORY_ID), size: 1000 },
    });

    
    const categoryOptions: SelectOptionNumber[] = useMemo(() => (
        categoryData?.getMstCategoryByParentId?.result?.map((cat: Category) => ({
            value: Number(cat.categoryId),
            label: cat.categoryName,
        })) || []
    ), [categoryData]);

    const resolvedCategoryId = useMemo(() => {
        if (!categoryName || !categoryOptions.length) return undefined;
        const match = categoryOptions.find(
            (option) => option.label.trim().toLowerCase() === categoryName.trim().toLowerCase()
        );
        return match?.value;
    }, [categoryName, categoryOptions]);

    const formik = useFormik({
        initialValues,
        validationSchema: CategorySelectionSchema,
        onSubmit: (values) => {
            onUpdate({ categoryId: Number(values.categoryId) });
            handleNext();
        },
        validateOnBlur: false,
        validateOnChange: false,
        enableReinitialize: true,
    });

    const handleNextStep = async () => {
        await formik.setTouched({ categoryId: true });
        const isValid = await formik.validateForm();

        if (Object.keys(isValid).length === 0) {
            await formik.submitForm();
        }
    };

    const hasError = formik.touched.categoryId && formik.errors.categoryId;

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className={clsx("p-4 xl:p-2 2xl:p-3", formClassName)}
        >
            <div className="h-full flex flex-col">
                <div>
                    <p className="text-md xl:text-sm 2xl:text-lg font-semibold">Select Category</p>
                    <p className="text-sm xl:text-xs 2xl:text-sm text-[var(--primary-color)] mb-3 font-normal">
                        Please choose
                    </p>

                    <div className="mb-5">
                        <label
                            htmlFor="categoryId"
                            className="block text-sm xl:text-[13px] 2xl:text-sm font-medium mb-2"
                        >
                            Category
                        </label>
                        <Dropdown
                            id="categoryId"
                            loading={loading}
                            name="categoryId"
                            value={formik.values.categoryId ?? resolvedCategoryId}
                            options={categoryOptions}
                            optionLabel="label"
                            placeholder="Select Category"
                            onChange={(e) => {
                                formik.setFieldValue("categoryId", e.value);
                                formik.setFieldValue("provinceId", "");
                                formik.setFieldValue("cityId", "");
                                formik.setFieldValue("suburbId", "");
                            }}
                            className={clsx(
                                "form-control text-sm xl:text-[13px] 2xl:text-xs w-full h-8 font-semibold text-gray-500",
                                hasError ? "p-invalid border border-red-500" : "border border-gray-300"
                            )}
                            filter
                        />
                        {hasError && (
                            <div className="mt-1 text-sm text-red-600">{formik.errors.categoryId}</div>
                        )}
                    </div>
                </div>

                <div className="flex justify-between mt-auto">
                    <Button
                        onClick={handlePrev}
                        className="bg-[var(--secondary-color)] border border-[var(--secondary-color)] text-sm text-white hover:bg-white hover:text-[var(--secondary-color)]"
                    >
                        Previous
                    </Button>
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
}
