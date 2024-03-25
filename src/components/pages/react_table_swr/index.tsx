import { Fragment, useMemo, type ReactElement } from "react";
import {
  createColumnHelper,
  CellContext,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import useSWR from "swr";

import { Headline } from "@/components/ui_elements/headline";
import { TableRT } from "@/components/ui_parts/table/table_rt";
import { fetcher } from "@/utils/swr_fetchers";
import { formatDate } from "@/utils/common";

import Styles from "./react_table_page.module.css";

const directorFormater = (props: CellContext<any, unknown>) => (
  <div className={Styles.align_right} key={props.cell.id}>
    {props.cell.getValue<string>()}
  </div>
);

const dateFormater = (props: CellContext<any, unknown>) => (
  <Fragment key={props.cell.id}>
    {formatDate(new Date(props.cell.getValue<string>()), "GGGG年MM月dd日")}
  </Fragment>
);

// SWR用
type FetchData = {
  allFilms: {
    films: {
      title: string;
      director: string;
      releaseDate: string;
    }[];
  };
};

// createColumnHelper用
type StarWars = {
  title: string;
  director: string;
  releaseDate: string;
};

export const ReactSwrTablePage = (): ReactElement => {
  // swr用
  const columnHelper = createColumnHelper<StarWars>();

  const columns = [
    columnHelper.accessor("title", {
      header: "Title",
      id: "title",
      enableSorting: false,
      size: 250,
    }),
    columnHelper.accessor((row) => row.director, {
      header: () => <span>ディレクター</span>,
      id: "director",
      cell: (props) => directorFormater(props),
      size: 150,
    }),

    columnHelper.accessor("releaseDate", {
      header: "Release Date",
      id: "release date",
      cell: (props) => dateFormater(props),
      size: 500,
    }),
  ];

  const { data } = useSWR<FetchData>(
    `
      query Query {
        allFilms {
          films {
            title
            director
            releaseDate
          }
        }
      }
      `,
    fetcher,
  );

  // dataのメモ化
  const replaceData = useMemo(
    () =>
      data?.allFilms
        ? [...data.allFilms.films]
        : [{ title: "", director: "", releaseDate: "" }],
    [data],
  );

  const tableInstance = useReactTable({
    data: replaceData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <section className={Styles.large_section}>
      <Headline>React Table Test（SWR）</Headline>
      <TableRT tableInstance={tableInstance} size="m" />
    </section>
  );
};
