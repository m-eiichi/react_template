import { type ReactElement } from "react";
import { Table } from "@/components/ui_parts/table";

import Styles from "./table_page.module.css";

export const TablePage = (): ReactElement => {
  const data = {
    header: ["123", "123", "123", "123", "123"],
    column: [
      [123, 123, 123, 123, 123],
      [123, 123, 123, "", 123],
      [123, 123, 123, 123, 123],
      [123, 123, 123, 123, 123],
      [123, 123, 123, 123, 123],
    ],
  };

  return (
    <section className={Styles.large_section}>
      <Table size="s" data={data} tableWidth={"1200"} tableHeight={"200"} />
    </section>
  );
};
