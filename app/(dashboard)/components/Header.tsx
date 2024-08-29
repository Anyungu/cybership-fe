"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";

import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

type Props<TData> = {
  table: Table<TData>;
};

function Header<TData>({ table }: Props<TData>) {
  const router = useRouter();

  const [page, setPage] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [fetching, setFetching] = useState<boolean>(false);

  return (
    <div className=" w-full flex flex-row gap-8">
      <Input
        placeholder="Search..."
        value={table.getState().globalFilter || ""}
        onChange={(event) => {
          table.setGlobalFilter(event?.target?.value);
        }}
        className="max-w-sm"
      />

      <Input
        placeholder="page"
        value={page}
        onChange={(event) => {
          setPage(event?.target?.value);
        }}
        className="w-24 hidden laptop:block"
      />
      <Input
        placeholder="size"
        value={size}
        onChange={(event) => {
          setSize(event?.target?.value);
        }}
        className="w-24 hidden laptop:block"
      />

      <Button
        className=" bg-button hidden laptop:flex laptop:flex-row"
        onClick={() => {
          if (page && size) {
            setFetching(true);
            router.push(`/orders?page=${page}&size=${size}`)
            setFetching(false);
          }
        }}
      >
        {" "}
        <Loader2
          className={`mr-2 h-4 w-4 animate-spin ${
            fetching ? "block" : "hidden"
          } `}
        />{" "}
        Fetch Records{" "}
      </Button>
    </div>
  );
}

export default Header;
