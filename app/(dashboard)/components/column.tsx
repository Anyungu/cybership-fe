"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { ColumnDef, Row } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

type Order = {
  amount: number;
  date: Date;
};

type Props = {
  row: Row<Order>;
};

type PropsSort = {
  title: string;
  column: any;
};
const TableSorting = ({ title, column }: PropsSort) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};

export const columns: ColumnDef<Order>[] = [
  {
    id: "select-2",
    header: ({ table }) => (
      <Checkbox
        className=" bg-white"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: ({ column }) => <TableSorting column={column} title="Reference" />,
    accessorKey: "reference",
  },
  {
    header: ({ column }) => <TableSorting column={column} title="Amount" />,
    accessorKey: "amount",
    cell: ({ row }) => {
      const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return formatter.format(row.original.amount);
    },
  },
  {
    header: ({ column }) => <TableSorting column={column} title="Status" />,
    accessorKey: "status",
  },

  {
    header: ({ column }) => <TableSorting column={column} title="Customer" />,
    accessorKey: "customerName",
  },

  {
    header: ({ column }) => <TableSorting column={column} title="Date" />,
    accessorKey: "date",
    cell: ({ row }) => {
      const dateFormatter = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

      return dateFormatter.format(new Date(row.original.date));
    },
  },
];
