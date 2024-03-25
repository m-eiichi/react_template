import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import { Button } from "@/components/ui_elements/button";
import Styles from "./button_page.module.css";

export const ButtonPage = (): ReactElement => {
  return (
    <section className={Styles.large_section}>
      <Headline size="xl">React Vite Project</Headline>
      <Headline size="m">&lt; button &gt;</Headline>

      <div className={Styles.ul_container}>
        <ul className={Styles.ul} role="list">
          <li>
            <Headline size="s">Large</Headline>
            <p>min-width 136px</p>
            <p>height 56px</p>
          </li>
          <li>
            <Headline size="m">プライマリー</Headline>
            <ul className={Styles.button_status__list} role="list">
              <li>
                <p>default</p>
                <Button size="l">Button</Button>
              </li>
              <li>
                <p>full-width</p>
                <Button size="l" fullWidth>
                  Button
                </Button>
              </li>
              <li>
                <p>disabled</p>
                <Button size="l" disabled>
                  Button
                </Button>
              </li>
            </ul>
          </li>
          <li>
            <Headline size="m">セカンダリー</Headline>
            <ul className={Styles.button_status__list} role="list">
              <li>
                <p>default</p>
                <Button size="l" color="secondary">
                  Button
                </Button>
              </li>
              <li>
                <p>full-width</p>
                <Button size="l" color="secondary" fullWidth>
                  Button
                </Button>
              </li>
              <li>
                <p>disabled</p>
                <Button size="l" color="secondary" disabled>
                  Button
                </Button>
              </li>
            </ul>
          </li>
          <li>
            <Headline size="m">ターシャリ</Headline>
            <ul className={Styles.button_status__list} role="list">
              <li>
                <p>default</p>
                <Button size="l" color="tertiary">
                  Button
                </Button>
              </li>
              <li>
                <p>full-width</p>
                <Button size="l" color="tertiary" fullWidth>
                  Button
                </Button>
              </li>
              <li>
                <p>disabled</p>
                <Button size="l" color="tertiary" disabled>
                  Button
                </Button>
              </li>
            </ul>
          </li>
        </ul>

        <ul className={Styles.ul} role="list">
          <li>
            <Headline size="s">Medium</Headline>
            <p>min-width 96px</p>
            <p>height 48px</p>
          </li>
          <li>
            <Headline size="m">プライマリー</Headline>
            <ul className={Styles.button_status__list} role="list">
              <li>
                <p>default</p>
                <Button size="m" color="primary">
                  Button
                </Button>
              </li>
              <li>
                <p>full-width</p>
                <Button size="m" color="primary" fullWidth>
                  Button
                </Button>
              </li>
              <li>
                <p>disabled</p>
                <Button size="m" color="primary" disabled>
                  Button
                </Button>
              </li>
            </ul>
          </li>
          <li>
            <Headline size="m">セカンダリー</Headline>
            <ul className={Styles.button_status__list} role="list">
              <li>
                <p>default</p>
                <Button size="m" color="secondary">
                  Button
                </Button>
              </li>
              <li>
                <p>full-width</p>
                <Button size="m" color="secondary" fullWidth>
                  Button
                </Button>
              </li>
              <li>
                <p>disabled</p>
                <Button size="m" color="secondary" disabled>
                  Button
                </Button>
              </li>
            </ul>
          </li>
          <li>
            <Headline size="m">ターシャリ</Headline>
            <ul className={Styles.button_status__list} role="list">
              <li>
                <p>default</p>
                <Button size="m" color="tertiary">
                  Button
                </Button>
              </li>
              <li>
                <p>full-width</p>
                <Button size="m" color="tertiary" fullWidth>
                  Button
                </Button>
              </li>
              <li>
                <p>disabled</p>
                <Button size="m" color="tertiary" disabled>
                  Button
                </Button>
              </li>
            </ul>
          </li>
        </ul>

        <ul className={Styles.ul} role="list">
          <li>
            <Headline size="s">Small</Headline>
            <p>min-width 80px</p>
            <p>height 36px</p>
          </li>
          <li>
            <Headline size="m">プライマリー</Headline>
            <ul className={Styles.button_status__list} role="list">
              <li>
                <p>default</p>
                <Button size="s" color="primary">
                  Button
                </Button>
              </li>
              <li>
                <p>full-width</p>
                <Button size="s" color="primary" fullWidth>
                  Button
                </Button>
              </li>
              <li>
                <p>disabled</p>
                <Button size="s" color="primary" disabled>
                  Button
                </Button>
              </li>
            </ul>
          </li>
          <li>
            <Headline size="m">セカンダリー</Headline>
            <ul className={Styles.button_status__list} role="list">
              <li>
                <p>default</p>
                <Button size="s" color="secondary">
                  Button
                </Button>
              </li>
              <li>
                <p>full-width</p>
                <Button size="s" color="secondary" fullWidth>
                  Button
                </Button>
              </li>
              <li>
                <p>disabled</p>
                <Button size="s" color="secondary" disabled>
                  Button
                </Button>
              </li>
            </ul>
          </li>
          <li>
            <Headline size="m">ターシャリ</Headline>
            <ul className={Styles.button_status__list} role="list">
              <li>
                <p>default</p>
                <Button size="s" color="tertiary">
                  Button
                </Button>
              </li>
              <li>
                <p>full-width</p>
                <Button size="s" color="tertiary" fullWidth>
                  Button
                </Button>
              </li>
              <li>
                <p>disabled</p>
                <Button size="s" color="tertiary" disabled>
                  Button
                </Button>
              </li>
            </ul>
          </li>
        </ul>

        <ul className={Styles.ul} role="list">
          <li>
            <Headline size="s">X-Small</Headline>
            <p>min-width 72px</p>
            <p>height 28px</p>
          </li>
          <li>
            <Headline size="m">プライマリー</Headline>
            <ul className={Styles.button_status__list} role="list">
              <li>
                <p>default</p>
                <Button size="xs" color="primary">
                  Button
                </Button>
              </li>
              <li>
                <p>full-width</p>
                <Button size="xs" color="primary" fullWidth>
                  Button
                </Button>
              </li>
              <li>
                <p>disabled</p>
                <Button size="xs" color="primary" disabled>
                  Button
                </Button>
              </li>
            </ul>
          </li>
          <li>
            <Headline size="m">セカンダリー</Headline>
            <ul className={Styles.button_status__list} role="list">
              <li>
                <p>default</p>
                <Button size="xs" color="secondary">
                  Button
                </Button>
              </li>
              <li>
                <p>full-width</p>
                <Button size="xs" color="secondary" fullWidth>
                  Button
                </Button>
              </li>
              <li>
                <p>disabled</p>
                <Button size="xs" color="secondary" disabled>
                  Button
                </Button>
              </li>
            </ul>
          </li>
          <li>
            <Headline size="m">ターシャリ</Headline>
            <ul className={Styles.button_status__list} role="list">
              <li>
                <p>default</p>
                <Button size="xs" color="tertiary">
                  Button
                </Button>
              </li>
              <li>
                <p>full-width</p>
                <Button size="xs" color="tertiary" fullWidth>
                  Button
                </Button>
              </li>
              <li>
                <p>disabled</p>
                <Button size="xs" color="tertiary" disabled>
                  Button
                </Button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};
