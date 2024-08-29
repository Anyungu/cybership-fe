import React from "react";
import { CustomTable } from "../components/CustomTable";
import { columns } from "../components/column";

const fetchOrders = async (page: string, size: string) => {
  const url = new URL(`${process.env.API_URL}/api/orders`);
  url.searchParams.set("page", page);
  url.searchParams.set("size", size);

  const res = await fetch(url.toString());

  return res.json();
};

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: Props) => {
  const pageStr =
    typeof searchParams.page === "string"
      ? searchParams.page
      : String(searchParams.page || "1");
  const sizeStr =
    typeof searchParams.size === "string"
      ? searchParams.size
      : String(searchParams.size || "10");

  const orders = await fetchOrders(pageStr, sizeStr);

  return (
    <div>
      <CustomTable columns={columns} data={orders} />
    </div>
  );
};

export default page;
