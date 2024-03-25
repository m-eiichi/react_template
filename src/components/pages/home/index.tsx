import { formatDate } from "@/utils/common";
import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import Styles from "./home.module.css";

export const Home = (): ReactElement => {
  return (
    <section className={Styles.large_section}>
      <Headline size="xl">React Template</Headline>
      <Headline size="m">&lt; Home &gt;</Headline>
      <p>{formatDate(new Date(), "yyyy/MM/dd/SSSSS")}</p>
      <p>
        下記のデザインシステム（Figma）を基にReactに落とし込んだテンプレートです。
        <br />
        ソースは
        <a href="https://github.com/m-eiichi/react_template">
          https://github.com/m-eiichi/react_template
        </a>
        に公開しています。
        <br />
        <br />
      </p>
      <ul role="list">
        <li>
          <a href="https://www.figma.com/proto/9QaLrBpJaa2oES5qbLLnwH/figma_for_react_template?page-id=58%3A18398&type=design&node-id=2027-8835&viewport=216%2C360%2C0.13&t=RN4tFegZpUA35Gjr-1&scaling=min-zoom&mode=design">
            スタイル-ルール
          </a>
        </li>
        <li>
          <a href="https://www.figma.com/proto/9QaLrBpJaa2oES5qbLLnwH/figma_for_react_template?page-id=7%3A11&type=design&node-id=2027-8645&viewport=-7145%2C-5171%2C0.5&t=RMVagOKwXRt8AnZm-1&scaling=min-zoom&mode=design">
            コンポーネント-ルール
          </a>
        </li>
      </ul>
    </section>
  );
};
