import { formatDate } from "@/utils/common";
import useSWR from "swr";
import { request } from "graphql-request";

import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import Styles from "./home.module.css";
import { ProgressIndicator } from "@/components/ui_parts/progress_indicator";
import { Divider } from "@/components/ui_elements/divider";

const fetcher = <T,>(query: string): Promise<T> =>
  request("http://localhost/API/query", query);
// const fetcher: any = (query: any) => request("https://swapi-graphql.netlify.app/.netlify/functions/index", query);

export const Home = (): ReactElement => {
  const { data, error } = useSWR(
    `
    query {
        db_ver
      }
    `,
    fetcher,
  );
  // const { data, error } = useSWR(
  //   `
  //   query Query {
  //     allFilms {
  //       films {
  //         title
  //         director
  //         releaseDate
  //         speciesConnection {
  //           species {
  //             name
  //             classification
  //             homeworld {
  //               name
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   `,
  //   fetcher,
  // );
  console.log(data);
  console.log(error);

  return (
    <section className={Styles.large_section}>
      <Headline size="xl">React Vite Project</Headline>
      <Headline size="m">&lt; Home &gt;</Headline>
      <ProgressIndicator />
      <p>{formatDate(new Date(), "yyyy/MM/dd/SSSSS")}</p>
      <p>
        React Vite Project React Vite Project React Vite Project React Vite
        Project React Vite Project React Vite Project React Vite Project React
        Vite Project React Vite Project React Vite Project React Vite Project
        React Vite Project React Vite Project React Vite Project React Vite
        Project React Vite Project React Vite Project React Vite Project React
        Vite Project React Vite Project React Vite Project React Vite Project
        React Vite Project React Vite Project React Vite Project React Vite
        Project React Vite Project React Vite Project React Vite Project React
        Vite Project React Vite Project React Vite Project React Vite Project
        React Vite Project React Vite Project React Vite Project React Vite
        Project React Vite Project
        <br />
        <br />
      </p>
      <Divider type="fit" vMarginType="list" />
      <br />
      <Divider type="inset" vMarginType="contents" />
      <ul role="list">
        <li>
          <a href="https://www.figma.com/proto/OILfaxYzcJlpD786Zz0fll/DIC-Design-System?page-id=1%3A5&type=design&node-id=25-499&viewport=515%2C321%2C0.09&t=lE7OQ38rnnEXSAWI-1&scaling=min-zoom&mode=design">
            スタイル-ルール
          </a>
        </li>
        <li>
          <a href="https://www.figma.com/proto/OILfaxYzcJlpD786Zz0fll/DIC-Design-System?page-id=25%3A2207&type=design&node-id=25-6177&viewport=2830%2C1895%2C0.34&t=6k4VsTTG0Iicnt3K-1&scaling=min-zoom">
            コンポーネント-ルール
          </a>
        </li>
      </ul>
    </section>
  );
};
