import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import Styles from "./images_page.module.css";

export const ImagesPage = (): ReactElement => {
  return (
    <section className={Styles.large_section}>
      <Headline size="xl">React Vite Project</Headline>
      <Headline size="m">&lt; images &gt;</Headline>
      <ul role="list">
        <li>
          <Headline size="xs">動画やイメージ画像の比率</Headline>
          <div className={Styles.image01}>16:9</div>
        </li>

        <li>
          <Headline size="xs">写真や一部のスクリーンの比率</Headline>
          <div className={Styles.image02}>3:2</div>
        </li>
        <li>
          <Headline size="xs">人物紹介等での比率</Headline>
          <div className={Styles.image03}>1:1</div>
        </li>
        <li>
          <Headline size="xs">定期刊行物等</Headline>
          <div className={Styles.image__container}>
            <div className={Styles.image04}>A4</div>
            <div className={Styles.image05}>A5</div>
            <div className={Styles.image06}>A6</div>
          </div>
        </li>
        <li>
          <Headline size="xs">バナー</Headline>
          <div className={Styles.image07}>234×60IMU</div>
        </li>
      </ul>
    </section>
  );
};
