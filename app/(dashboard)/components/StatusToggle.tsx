import { Table } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";

type Props<TData> = {
  table: Table<TData>;
};

type ToggleOptions = "online" | "unknown" | "offline";

function StatusToggle<TData>({ table }: Props<TData>) {
  const [active, setIsActive] = useState<ToggleOptions>("online");

  useEffect(() => {
    table.getColumn("select")?.setFilterValue(active);
  }, [active, table]);

  const handleToggleClick = (option: ToggleOptions) => {
    setIsActive(option);
    table.getColumn("select")?.setFilterValue(option);
  };
  return (
    <div className=" flex flex-row  text-sm w-fit border border-button rounded-md">
      <div
        onClick={() => handleToggleClick("online")}
        className={`px-2 py-1 cursor-pointer rounded-l-md hover:bg-button hover:text-white border-l border-t border-b  ${
          active === "online" ? " bg-button text-white" : ""
        }`}
      >
        All
      </div>
      <div
        onClick={() => handleToggleClick("unknown")}
        className={`px-2 py-1  border-l border-r cursor-pointer  hover:bg-button hover:text-white border-t border-b  ${
          active === "unknown" ? " bg-button text-white" : ""
        }`}
      >
        Placed
      </div>
      <div
        onClick={() => handleToggleClick("offline")}
        className={`px-2 py-1 cursor-pointer rounded-r-md  hover:bg-button hover:text-white border-r border-t border-b  ${
          active === "offline" ? " bg-button text-white" : ""
        }`}
      >
        Approved
      </div>
      <div
        onClick={() => handleToggleClick("offline")}
        className={`px-2 py-1 cursor-pointer rounded-r-md  hover:bg-button hover:text-white border-r border-t border-b  ${
          active === "offline" ? " bg-button text-white" : ""
        }`}
      >
        Rejected
      </div>
      <div
        onClick={() => handleToggleClick("offline")}
        className={`px-2 py-1 cursor-pointer rounded-r-md  hover:bg-button hover:text-white border-r border-t border-b  ${
          active === "offline" ? " bg-button text-white" : ""
        }`}
      >
        In Transit
      </div>

      <div
        onClick={() => handleToggleClick("offline")}
        className={`px-2 py-1 cursor-pointer rounded-r-md  hover:bg-button hover:text-white border-r border-t border-b  ${
          active === "offline" ? " bg-button text-white" : ""
        }`}
      >
        Completed
      </div>
    </div>
  );
}

export default StatusToggle;
