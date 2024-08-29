"use client";

import { BriefcaseBusinessIcon, TicketIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const IS_ACTIVE = `flex ease-in-out text-white items-center px-5 py-3 space-x-2 cursor-pointer w-full font-bold`;
const IS_NOT_ACTIVE = `flex ease-in-out text-gray-400 items-center px-5 py-3 space-x-2 hover:text-hoversidenavtext cursor-pointer w-full`;

type Props = {};

const Sidenav = (props: Props) => {
  const pathName = usePathname();
  const isPathActive = (path: string) => pathName == path;
  return (
    <div className=" flex flex-col bg-sidenavbg py-4 w-12 tabs:w-36 desktop:w-64">
      <Link
        href={{ pathname: "/orders", query: { page: "1", size: "5" } }}
        className={`tabs:pl-10 ${
          isPathActive("/home") ? IS_ACTIVE : IS_NOT_ACTIVE
        }`}
      >
        <div
          className={`flex flex-row items-center space-x-2 hover:py-2 hover:pl-2 hover:pr-8 hover:bg-gray-800 hover:rounded-lg ${
            isPathActive("/iot/provision")
              ? "py-2 pl-2 pr-8 bg-gray-800 rounded-lg"
              : ""
          } `}
        >
          <BriefcaseBusinessIcon size={16} />
          <div className="hidden tabs:block"> Orders </div>
        </div>
      </Link>

      <Link
        href={{ pathname: "/orders", query: { page: "1", size: "2" } }}
        className={`tabs:pl-10 ${
          isPathActive("/home") ? IS_ACTIVE : IS_NOT_ACTIVE
        }`}
      >
        <div
          className={`flex flex-row items-center space-x-2 hover:py-2 hover:pl-2 hover:pr-8 hover:bg-gray-800 hover:rounded-lg ${
            isPathActive("/iot/provision")
              ? "py-2 pl-2 pr-8 bg-gray-800 rounded-lg"
              : ""
          } `}
        >
          <TicketIcon size={16} />
          <div className="hidden tabs:block"> Tickets </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidenav;
