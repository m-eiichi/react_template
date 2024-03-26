import { useMemo, type ReactElement } from "react";
import {
  ColumnDef,
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  Updater,
  RowSelectionState,
} from "@tanstack/react-table";
import { Headline } from "@/components/ui_elements/headline";
import { TableRT } from "@/components/ui_parts/table/table_rt";

import { makeData, Person } from "./makeData";
import Styles from "./react_table_page.module.css";

export const FakerReactTablePage = (): ReactElement => {
  const rowClick = (updaterOrValue: Updater<RowSelectionState>) => {
    console.log(new Date());
    if (typeof updaterOrValue === "function") {
      let aaa = {};
      aaa = updaterOrValue({});
      console.log(table.getRow(Object.keys(aaa)[0]).original);
      console.log("row index:" + Object.keys(aaa));
    }
  };

  const columnHelper = createColumnHelper<Person>();

  const columns: ColumnDef<Person, any>[] = [
    columnHelper.accessor("firstName", {
      header: "FirstName",
      id: "firstName",
      enableSorting: false,
      size: 300, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),
    columnHelper.accessor("lastName", {
      header: "LastName",
      id: "lastName",
      enableSorting: false,
      size: 300, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),
    columnHelper.accessor("age", {
      header: "Age",
      id: "age",
      enableSorting: false,
      size: 300, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),
    columnHelper.accessor("visits", {
      header: "Visits",
      id: "visits",
      enableSorting: false,
      size: 300, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),
    columnHelper.accessor("progress", {
      header: "Progress",
      id: "progress",
      enableSorting: false,
      size: 300, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),
  ];

  // data
  const defaultData = makeData(50, 2, 2);
  const data = useMemo(() => defaultData, []);

  const table = useReactTable<Person>({
    data,
    columns: columns,
    columnResizeMode: "onChange",
    onRowSelectionChange: rowClick,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <section className={Styles.large_section}>
      <Headline size="xl">React Template</Headline>
      <Headline size="m">&lt; React Table Test &gt;</Headline>
      <TableRT
        tableInstance={table}
        size="m"
        fixedColumn={2}
        tableHeight="500px"
      />
    </section>
  );
};
