import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PACKAGE_DETAIL } from '@/core/graphql/queries/getPackageDetail';
import { PackageAttribute } from '@/core/models/packages/packageAttribute';


interface PackagesDetailProps {
  packageID: number;
}

export default function PackageDetail({ packageID }: PackagesDetailProps) {
  const { data } = useQuery(GET_PACKAGE_DETAIL, {
    variables: { packageId: packageID, status: true },
    fetchPolicy: 'cache-first',
  });

  const packageDetailList: PackageAttribute[] = data?.getMstPackageDetailList?.result ?? [];

  const renderPackageDetail = (detail: PackageAttribute): string => {
    if (detail.attributeName === 'Time Delay') {
      return `${detail.value ?? 0} HR${Number(detail.value) > 1 ? 'S' : ''} ${detail.attributeName}`;
    }
    if (detail.value === 'All') return detail.attributeName ?? '';
    if (detail.value === '-1') return `Unlimited ${detail.attributeName}`;
    return `${detail.value ?? ''} ${detail.attributeName}`;
  };

  return (
    <ul className="mt-22 list-disc uppercase mx-10 sm:mx-15 lg:mx-8 ml-12 md:ml-10 lg:ml-8 xl:ml-20 2xl:ml-30 text-4">
      {packageDetailList.map((detail, index) => (
        <li key={index} className="mb-1 lg:mb-2">
          {renderPackageDetail(detail)}
        </li>
      ))}
    </ul>
  );
};

