import { type ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Headline } from "@/components/ui_elements/headline";
import Styles from "./vehicle_page.module.css";

export const VehiclePage = (): ReactElement => {
  const { id } = useParams();
  return (
    <section className={Styles.large_section}>
      <Headline size="xl">vehicle</Headline>
      <p>ID:{id}</p>
    </section>
  );
};
