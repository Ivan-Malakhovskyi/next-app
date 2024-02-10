import clsx from "clsx";
import React from "react";

export enum CompanyStatus {
  Active = "active",
  NotActibe = "notActive",
  Pending = "pending",
  Suspended = "suspended",
}

export interface StatusLabelProps {
  status: CompanyStatus;
  disabled?: boolean;
  styled?: boolean;
}

const labelByStatus = {
  [CompanyStatus.Active]: "Active",
  [CompanyStatus.NotActibe]: "Not Active",
  [CompanyStatus.Pending]: "Pending",
  [CompanyStatus.Suspended]: "Suspended",
};

const StatusLabels = ({ status, disabled, styled }: StatusLabelProps) => {
  const label = labelByStatus[status];

  if (!styled) return <>{label}</>;

  return (
    <div
      className={clsx(
        "inline-flex items-center py-[4px] px-[14px] rounded-28px text-sm font-medium",
        status === CompanyStatus.Active && "text-[#15803d] bg-[#dcfce7]",
        status === CompanyStatus.NotActibe && "text-[#b91c1c] bg-[#fee2e2]",
        status === CompanyStatus.Pending && "text-[#c2410c] bg-[#ffedd5]",
        status === CompanyStatus.Suspended && "text-[#1d4ed8] bg-[#dbeafe]",
        { ["opacity-75 cursor-not-allowed"]: disabled }
      )}
    >
      <div className="w-[4px] h-[4px] mr-2 rounded-full bg-current" />
      {label}
    </div>
  );
};

export default StatusLabels;
