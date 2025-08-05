export interface RequestItemFormData {
  item?: string;
  description?: string;
  categoryId?: number;
  provinceId?: number;
  cityId?: number;
  suburbId?: number;
  upload?: File[];
  name?: string;
  password?: string;
  email?: string;
  mobile?: string;
}

export interface ItemDetailsFormData {
  item?: string;
  description?: string;
}

export interface ItemCategoryFormData {
  categoryId?: number;
}

export interface LocationSelectionFormData {
  provinceId?: number;
  cityId?: number;
  suburbId?: number;
}

export interface FileUploadFormData {
  upload?: File[];
}

export interface UserRegistrationFormData {
  name?: string;
  password?: string;
  email?: string;
  mobile?: string;
}

// ✅ Formik initial values for entire multi-step form
export const initialRequestFormValues: RequestItemFormData = {
  item: '',
  description: '',
  categoryId: undefined,
  provinceId: undefined,
  cityId: undefined,
  suburbId: undefined,
  upload: [],
  name: '',
  password: '',
  email: '',
  mobile: '',
};
