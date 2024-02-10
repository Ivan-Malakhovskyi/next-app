import React from "react";
import StatusLabels, { CompanyStatus } from "./status-labels";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export interface Company {
  id: string;
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  hasPromotions: boolean;
  categoryId: string;
  categoryTitle: string;
  countryId: string;
  countryTitle: string;
  avatar?: string;
}

export interface CompanyRowProps {
  company: Company;
}

const CompanyRow = ({
  company: {
    id,
    title,
    status,
    joinedDate,
    hasPromotions,
    categoryTitle,
    countryTitle,
  },
}: CompanyRowProps) => {
  return (
    <tr className="h-14 text-center text-gray-900 bg-white">
      <td className="text-sx font-medium text-blue-700 rounded-1 border-1-4 border-blue-700">
        {categoryTitle}
      </td>
      <td>
        <Link href={`/companies/${id}`}>{title}</Link>
      </td>
      <td>
        <StatusLabels status={status} />
      </td>
      <td>
        <div className="inline-flex items-center gap-1">
          <Image
            width={32}
            height={32}
            src={`icons/${hasPromotions ? "check" : "x-mark"}.svg`}
            alt="promotion_icon"
          />
          <span
            className={clsx(
              "text-sm font-medium  ",
              hasPromotions ? "text-green-700" : "text-red-700"
            )}
          >
            {hasPromotions ? "Yes" : "No"}
          </span>
        </div>
        <td>{countryTitle}</td>
        <td>{new Date(joinedDate).toLocaleDateString("uk-UA")}</td>
      </td>
    </tr>
  );
};

export default CompanyRow;

// tsrafce
