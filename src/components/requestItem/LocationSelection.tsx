import { useEffect, useMemo, useRef } from "react";
import { useFormik } from "formik";
import clsx from "clsx";
import { useQuery, useLazyQuery } from "@apollo/client";
import { Dropdown } from "primereact/dropdown";
import { LocationSelectionFormData } from "@/core/models/requestItem/request-item.model";
import { GET_CITY_BY_PROVINCE } from "@/core/graphql/queries/getCitiesByProvince";
import { GET_PROVINCE } from "@/core/graphql/queries/getProvinces";
import { GET_SUBURB_BY_CITY } from "@/core/graphql/queries/getSuburbsByCity";
import { City } from "@/core/models/location/city";
import { Province } from "@/core/models/location/province";
import { Suburb } from "@/core/models/location/suburb";
import { SelectOptionNumber } from "@/core/models/shared/selectOption";
import { LocationSelectionSchema } from "@/core/validators/request-item.schema";
import { Button } from "primereact/button";



interface LocationSelectionProps {
  onUpdate: (data: LocationSelectionFormData) => void;
  handleNext: () => void;
  handlePrev: () => void;
  initialValues: LocationSelectionFormData;
}

export default function LocationSelection({
  onUpdate,
  handleNext,
  handlePrev,
  initialValues
}: LocationSelectionProps) {
  const { data: provinceData, loading: provinceLoading } = useQuery(GET_PROVINCE);
  const [getCitiesByProvince, { data: cityData, loading: cityLoading }] = useLazyQuery(GET_CITY_BY_PROVINCE);
  const [getSuburbsByCity, { data: suburbData, loading: suburbLoading }] = useLazyQuery(GET_SUBURB_BY_CITY);

  const fetchedInitialCities = useRef(false);
  const fetchedInitialSuburbs = useRef(false);

  const provinces = provinceData?.getProvince?.result ?? [];
  const cities = cityData?.getCityByProvince?.result ?? [];
  const suburbs = suburbData?.getSuburbByCity?.result ?? [];
  

  const provinceOptions: SelectOptionNumber[] = useMemo(() =>
    provinces.map((p: Province) => ({
      value: Number(p.provinceId),
      label: p.provinceName
    })), [provinces]);

  const cityOptions: SelectOptionNumber[] = useMemo(() =>
    cities.map((c: City) => ({
      value: Number(c.cityId),
      label: c.cityName
    })), [cities]);

  const suburbOptions: SelectOptionNumber[] = useMemo(() =>
    suburbs.map((s: Suburb) => ({
      value: Number(s.suburbId),
      label: s.suburbName
    })), [suburbs]);

  const formik = useFormik<LocationSelectionFormData>({
    initialValues,
    validationSchema: LocationSelectionSchema,
    onSubmit: (values) => {
      onUpdate(values);
      handleNext();
    },
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true
  });

  const hasError = (field: keyof LocationSelectionFormData) =>
    (formik.touched[field] || formik.submitCount > 0) && !!formik.errors[field];

  const inputClass = "form-control text-sm xl:text-[13px] 2xl:text-xs w-full h-8 font-semibold text-gray-500";

  // Load initial data if already selected
  useEffect(() => {
    if (initialValues.provinceId && !fetchedInitialCities.current) {
      getCitiesByProvince({ variables: { id: initialValues.provinceId } });
      fetchedInitialCities.current = true;
    }
  }, [initialValues.provinceId, getCitiesByProvince]);

  useEffect(() => {
    if (initialValues.cityId && !fetchedInitialSuburbs.current) {
      getSuburbsByCity({ variables: { id: initialValues.cityId } });
      fetchedInitialSuburbs.current = true;
    }
  }, [initialValues.cityId, getSuburbsByCity]);

  // React to selection
  useEffect(() => {
    if (formik.values.provinceId !== initialValues.provinceId) {
      getCitiesByProvince({ variables: { id: formik.values.provinceId } });
      formik.setFieldValue("cityId", 0);
      formik.setFieldValue("suburbId", 0);
    }
  }, [formik.values.provinceId]);

  useEffect(() => {
    if (formik.values.cityId !== initialValues.cityId) {
      getSuburbsByCity({ variables: { id: formik.values.cityId } });
      formik.setFieldValue("suburbId", 0);
    }
  }, [formik.values.cityId]);

  const handleNextStep = async () => {
    formik.setTouched({ provinceId: true, cityId: true, suburbId: true });
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      await formik.submitForm();
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="h-[415px] xl:h-full p-4 xl:p-2 2xl:p-3 border border-gray-300">
      <div className="h-full flex flex-col">
        <p className="text-md xl:text-sm 2xl:text-lg font-semibold">Select Location</p>
        <p className="text-sm xl:text-xs 2xl:text-sm text-[var(--primary-color)] mb-3 font-normal">Please choose</p>

        {/* Province */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-2">Province</label>
          <Dropdown
            loading={provinceLoading}
            value={formik.values.provinceId}
            options={provinceOptions}
            onChange={(e) => formik.setFieldValue("provinceId", e.value)}
            placeholder="Select Province"
            className={clsx(inputClass, hasError("provinceId") ? "border-red-500" : "border-gray-300")}
            filter
          />
          {hasError("provinceId") && <p className="text-sm text-red-600 mt-1">{formik.errors.provinceId}</p>}
        </div>

        {/* City */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-2">City</label>
          <Dropdown
            loading={cityLoading}
            value={formik.values.cityId}
            options={cityOptions}
            onChange={(e) => formik.setFieldValue("cityId", e.value)}
            placeholder="Select City"
            disabled={!formik.values.provinceId}
            className={clsx(inputClass, hasError("cityId") ? "border-red-500" : "border-gray-300")}
            filter
          />
          {hasError("cityId") && <p className="text-sm text-red-600 mt-1">{formik.errors.cityId}</p>}
        </div>

        {/* Suburb */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Suburb</label>
          <Dropdown
            loading={suburbLoading}
            value={formik.values.suburbId}
            options={suburbOptions}
            onChange={(e) => formik.setFieldValue("suburbId", e.value)}
            placeholder="Select Suburb"
            disabled={!formik.values.cityId}
            className={clsx(inputClass, hasError("suburbId") ? "border-red-500" : "border-gray-300")}
            filter
          />
          {hasError("suburbId") && <p className="text-sm text-red-600 mt-1">{formik.errors.suburbId}</p>}
        </div>

        <div className="flex justify-between mt-auto">
          <Button onClick={handlePrev} className="bg-[var(--secondary-color)] border text-sm text-white hover:bg-white hover:text-[var(--secondary-color)]">
            Previous
          </Button>
          <Button onClick={handleNextStep} className="bg-[var(--primary-color)] border text-sm text-white hover:bg-white hover:text-[var(--primary-color)]">
            Next
          </Button>
        </div>
      </div>
    </form>
  );
}
