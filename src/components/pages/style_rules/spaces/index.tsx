import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import Styles from "./spaces_page.module.css";

export const SpacesPage = (): ReactElement => {
  return (
    <section className={Styles.large_section}>
      <Headline size="xl">React Vite Project</Headline>
      <Headline size="m">&lt; space &gt;</Headline>
      <ul role="list">
        <li>
          <div className={Styles.space01}></div>
          <div>
            <Headline size="xs">spacing unit × 1/2</Headline>
            <p>
              使用例：padding: var(--base-size-4px); / margin:
              var(--base-size-4px); / gap: var(--base-size-4px);
            </p>
          </div>
        </li>
        <li>
          <div className={Styles.space02}></div>
          <div>
            <Headline size="xs">spacing unit × 1</Headline>
            <p>
              使用例：padding: var(--size-f-01); / margin: var(--size-f-01); /
              gap: var(--size-f-01);
            </p>
          </div>
        </li>
        <li>
          <div className={Styles.space03}></div>
          <div>
            <Headline size="xs">spacing unit × 2</Headline>
            <p>
              使用例：padding: var(--size-f-02); / margin: var(--size-f-02); /
              gap: var(--size-f-02);
            </p>
          </div>
        </li>
        <li>
          <div className={Styles.space04}></div>
          <div>
            <Headline size="xs">spacing unit × 3</Headline>
            <p>
              使用例：padding: var(--size-f-03); / margin: var(--size-f-03); /
              gap: var(--size-f-03);
            </p>
          </div>
        </li>
        <li>
          <div className={Styles.space05}></div>
          <div>
            <Headline size="xs">spacing unit × 5</Headline>
            <p>
              使用例：padding: var(--size-f-04); / margin: var(--size-f-04); /
              gap: var(--size-f-04);
            </p>
          </div>
        </li>
        <li>
          <div className={Styles.space06}></div>
          <div>
            <Headline size="xs">spacing unit × 8</Headline>
            <p>
              使用例：padding: var(--size-f-05); / margin: var(--size-f-05); /
              gap: var(--size-f-05);
            </p>
          </div>
        </li>
        <li>
          <div className={Styles.space07}></div>
          <div>
            <Headline size="xs">spacing unit × 13</Headline>
            <p>
              使用例：padding: var(--size-f-06); / margin: var(--size-f-06); /
              gap: var(--size-f-06);
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
