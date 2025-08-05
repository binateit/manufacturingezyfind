import * as Yup from 'yup';

export const ItemRequiredSchema = Yup.object({
  item: Yup.string().required("Item is required"),
  description: Yup.string().required("Description is required"),
});

export const CategorySelectionSchema = Yup.object({
    categoryId: Yup.number().moreThan(0, "Category is required").required("Category is required"),
});

export const LocationSelectionSchema = Yup.object({
  provinceId: Yup.number().moreThan(0, "Province is required").required("Province is required"),
  cityId: Yup.number().moreThan(0, "City is required").required("City is required"),
  suburbId: Yup.number().moreThan(0, "Suburb is required").required("Suburb is required"),
});
