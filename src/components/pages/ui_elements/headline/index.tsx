import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import { ComponentOutline } from "@/components/features/component_outline";
import Styles from "./headline_page.module.css";

export const HeadlinePage = (): ReactElement => {
  const code =
    '<Headline as="h1" size="xxs" color="primary" marginNone >headline -xxs primary- </Headline>';
  const propsItems = [
    {
      id: 1,
      componentProps: "as: h1 | h2 | h3 | h4 | h5 | p | dt | undifined",
    },
    { id: 2, componentProps: "size: xxs | xs | s | m | l | xl | undifined" },
    {
      id: 3,
      componentProps:
        "color: primary | secondary | tertiary | black | undifined",
    },
    { id: 4, componentProps: "marginNone: true | false | undifined" },
    { id: 5, componentProps: "children" },
  ];

  const desc = "---";
  return (
    <section className={Styles.large_section}>
      <Headline size="xl">React Template</Headline>
      <Headline size="m">&lt; headline &gt;</Headline>

      <ComponentOutline
        code={code}
        propsItems={propsItems}
        description={desc}
      />
      <Headline size="xxs">headline -xxs default-</Headline>
      <Headline size="xxs" color="primary">
        headline -xxs primary-
      </Headline>
      <Headline size="xxs" color="secondary">
        headline -xxs secondary-
      </Headline>
      <Headline size="xxs" color="tertiary">
        headline -xxs tertiary-
      </Headline>
      <Headline size="xs">headline -xs default-</Headline>
      <Headline size="xs" color="primary">
        headline -xs primary-
      </Headline>
      <Headline size="xs" color="secondary">
        headline -xs secondary-
      </Headline>
      <Headline size="xs" color="tertiary">
        headline -xs tertiary-
      </Headline>
      <Headline size="s">headline -s default-</Headline>
      <Headline size="s" color="primary">
        headline -s primary-
      </Headline>
      <Headline size="s" color="secondary">
        headline -s secondary-
      </Headline>
      <Headline size="s" color="tertiary">
        headline -s tertiary-
      </Headline>
      <Headline size="m">headline -m default-</Headline>
      <Headline size="m" color="primary">
        headline -m primary-
      </Headline>
      <Headline size="m" color="secondary">
        headline -m secondary-
      </Headline>
      <Headline size="m" color="tertiary">
        headline -m tertiary-
      </Headline>
      <Headline size="l">headline -l default-</Headline>
      <Headline size="l" color="primary">
        headline -l primary-
      </Headline>
      <Headline size="l" color="secondary">
        headline -l secondary-
      </Headline>
      <Headline size="l" color="tertiary">
        headline -l tertiary-
      </Headline>
      <Headline size="xl">headline -xl default-</Headline>
      <Headline size="xl" color="primary">
        headline -xl primary-
      </Headline>
      <Headline size="xl" color="secondary">
        headline -xl secondary-
      </Headline>
      <Headline size="xl" color="tertiary">
        headline -xl tertiary-
      </Headline>
    </section>
  );
};
