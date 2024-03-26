import { useMemo, Fragment, type ReactElement } from "react";
import {
  ColumnDef,
  createColumnHelper,
  CellContext,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  Updater,
  RowSelectionState,
} from "@tanstack/react-table";
import { Headline } from "@/components/ui_elements/headline";
import { TableRT } from "@/components/ui_parts/table/table_rt";
import { formatDate } from "@/utils/common";

import Styles from "./react_table_page.module.css";

// createColumnHelper用の型
type DataTypes = {
  title: string;
  director: string;
  releaseDate: string;
};

// 右寄せ
const directorFormater = (props: CellContext<any, unknown>) => (
  <div className={Styles.align_right} key={props.cell.id}>
    {props.cell.getValue<string>()}
  </div>
);

// 和暦に変換
const dateFormater = (props: CellContext<any, unknown>) => (
  <Fragment key={props.cell.id}>
    {formatDate(new Date(props.cell.getValue<string>()), "GGGG年MM月dd日")}
  </Fragment>
);

export const ReactTablePage = (): ReactElement => {
  const rowClick = (updaterOrValue: Updater<RowSelectionState>) => {
    console.log(new Date());
    if (typeof updaterOrValue === "function") {
      let aaa = {};
      aaa = updaterOrValue({});
      console.log(table.getRow(Object.keys(aaa)[0]).original);
      console.log("row index:" + Object.keys(aaa));
    }
  };

  const columnHelper = createColumnHelper<DataTypes>();

  const columns: ColumnDef<DataTypes, any>[] = [
    columnHelper.accessor("title", {
      header: "Title",
      id: "title",
      enableSorting: false,
      size: 300, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),
    columnHelper.accessor("director", {
      header: () => <span>ディレクター</span>,
      id: "director",
      cell: (props) => directorFormater(props),
      size: 300, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),

    columnHelper.accessor("releaseDate", {
      header: "Release Date",
      id: "release date",
      cell: (props) => dateFormater(props),
      size: 500, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),
  ];

  // data
  const defaultData = [
    {
      title: "A New Hope",
      director: "George Lucas",
      releaseDate: "1977-05-25",
    },
    {
      title: "The Empire Strikes Back",
      director: "Irvin Kershner",
      releaseDate: "1980-05-17",
    },
    {
      title: "Return of the Jedi",
      director: "Richard Marquand",
      releaseDate: "1983-05-25",
    },
    {
      title: "The Phantom Menace",
      director: "George Lucas",
      releaseDate: "1999-05-19",
    },
    {
      title: "Attack of the Clones",
      director: "George Lucas",
      releaseDate: "2002-05-16",
    },
    {
      title: "Revenge of the Sith",
      director: "George Lucas",
      releaseDate: "2005-05-19",
    },
  ];

  // dataのメモ化
  const data = useMemo(() => defaultData, []);

  const table = useReactTable<DataTypes>({
    data: data,
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
      <TableRT tableInstance={table} size="m" fixedColumn={2} />
    </section>
  );
};
