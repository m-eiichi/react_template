import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import { ColorItem } from "@/components/pages/style_rules/colors/color_item";
import Styles from "./colors_page.module.css";

export const ColorsPage = (): ReactElement => {
  return (
    <section className={Styles.large_section}>
      <Headline size="xl">React Template</Headline>
      <Headline size="m">&lt; colors &gt;</Headline>
      <dl className={Styles.dl_color_01} role="list">
        <div className={Styles.text_light__block}>
          <Headline as="dt" size="xs">
            Text Light
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Body"
                primitive="--grey-900"
                semantic="--color-base-text"
              />
            </dd>
            <dd>
              <ColorItem
                title="Description"
                primitive="--grey-700"
                semantic="--color-description-text"
              />
            </dd>
            <dd>
              <ColorItem
                title="Place Holder"
                primitive="--grey-600"
                semantic="--color-place-holder-text"
              />
            </dd>
            <dd>
              <ColorItem
                title="On Fill"
                primitive="--white"
                semantic="--color-on-fill-text"
                solid
              />
            </dd>
            <dd>
              <ColorItem
                title="Link"
                primitive="--blue-800"
                semantic="--color-link-text"
              />
            </dd>
            <dd>
              <ColorItem
                title="Hover"
                primitive="--blue-900"
                semantic="--color-hover-text"
              />
            </dd>
            <dd>
              <ColorItem
                title="Active"
                primitive="--blue-900"
                semantic="--color-active-text"
              />
            </dd>
            <dd>
              <ColorItem
                title="Visited"
                primitive="--blue-900"
                semantic="--color-visited-text"
              />
            </dd>
            <dd>
              <ColorItem
                title="Alert"
                primitive="--red-800"
                semantic="--color-alert-text"
              />
            </dd>
            <dd>
              <ColorItem
                title="Disabled"
                primitive="--grey-500"
                semantic="--color-disabled-text"
              />
            </dd>
          </div>
        </div>
        <div className={Styles.text_dark__block}>
          <Headline as="dt" size="xs">
            Text Dark
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Body"
                primitive="--white"
                semantic="--color-base-text-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Description"
                primitive="--grey-400"
                semantic="--color-description-text-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Place Holder"
                primitive="--grey-500"
                semantic="--color-place-holder-text-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="On Fill"
                primitive="--white"
                semantic="--color-on-fill-text"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Link"
                primitive="--blue-500"
                semantic="--color-link-text-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Hover"
                primitive="--blue-300"
                semantic="--color-hover-text-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Active"
                primitive="--blue-300"
                semantic="--color-active-text-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Visited"
                primitive="--blue-300"
                semantic="--color-visited-text-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Alert"
                primitive="--red-600"
                semantic="--color-alert-text-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Disabled"
                primitive="--grey-600"
                semantic="--color-disabled-text-dark"
                dark
              />
            </dd>
          </div>
        </div>
        <div className={Styles.background_light__block}>
          <Headline as="dt" size="xs">
            Background Light
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Primary"
                primitive="--white"
                semantic="--color-bg-primary"
                solid
              />
            </dd>
            <dd>
              <ColorItem
                title="Secondary"
                primitive="--grey-100"
                semantic="--color-bg-secondary"
              />
            </dd>
            <dd>
              <ColorItem title="Tertiary" primitive="--grey-50" semantic="" />
            </dd>
          </div>
        </div>
        <div className={Styles.background_dark__block}>
          <Headline as="dt" size="xs">
            Background Dark
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Primary"
                primitive="--grey-900"
                semantic=""
                dark
                solid
              />
            </dd>
            <dd>
              <ColorItem
                title="Secondary"
                primitive="--grey-700"
                semantic=""
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Tertiary"
                primitive="--grey-800"
                semantic=""
                dark
              />
            </dd>
          </div>
        </div>
        <div className={Styles.border_light__block}>
          <Headline as="dt" size="xs">
            Border Light
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Field"
                primitive="--grey-900 1px"
                semantic="--color-border-field"
              />
            </dd>
            <dd>
              <ColorItem
                title="Divider"
                primitive="--grey-417 1px"
                semantic="--color-border-divider"
              />
            </dd>
            <dd>
              <ColorItem
                title="Focused"
                primitive="--yellow-700 2px"
                semantic="--color-border-focused"
              />
            </dd>
            <dd>
              <ColorItem
                title="Selected"
                primitive="--blue-800 2px"
                semantic="--color-border-selected"
              />
            </dd>
            <dd>
              <ColorItem
                title="Alert"
                primitive="--red-800 2px"
                semantic="--color-border-alert"
              />
            </dd>
            <dd>
              <ColorItem
                title="Disabled"
                primitive="--grey-500 1px"
                semantic="--color-border-disabled"
              />
            </dd>
          </div>
        </div>
        <div className={Styles.border_dark__block}>
          <Headline as="dt" size="xs">
            Boder Dark
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Field"
                primitive="--white 1px"
                semantic="--color-border-field-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Divider"
                primitive="--grey-536 1px"
                semantic="--color-border-divider-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Focused"
                primitive="--yellow-500 2px"
                semantic="--color-border-focused-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Selected"
                primitive="--blue-500 2px"
                semantic="--color-border-selected-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Alert"
                primitive="--red-600 2px"
                semantic="--color-border-alert-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Disabled"
                primitive="--grey-600 1px"
                semantic="--color-border-disabled-dark"
                dark
              />
            </dd>
          </div>
        </div>
        <div className={Styles.icon_light__block}>
          <Headline as="dt" size="xs">
            Icon Light
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Label"
                primitive="--grey-900"
                semantic="--color-icon-label"
              />
            </dd>
            <dd>
              <ColorItem
                title="Active"
                primitive="--blue-800"
                semantic="--color-icon-active"
              />
            </dd>
            <dd>
              <ColorItem
                title="Alert"
                primitive="--red-800"
                semantic="--color-icon-alert"
              />
            </dd>
            <dd>
              <ColorItem
                title="Disabled"
                primitive="--grey-500"
                semantic="--color-icon-disabled"
              />
            </dd>
          </div>
        </div>
        <div className={Styles.icon_dark__block}>
          <Headline as="dt" size="xs">
            Icon Dark
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Label"
                primitive="--white"
                semantic="--color-icon-label-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Active"
                primitive="--blue-500"
                semantic="--color-icon-active-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Alert"
                primitive="--red-600"
                semantic="--color-icon-alert-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Disabled"
                primitive="--grey-600"
                semantic="--color-icon-disabled-dark"
                dark
              />
            </dd>
          </div>
        </div>
        <div className={Styles.status_light__block}>
          <Headline as="dt" size="xs">
            Status Light
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Infomation"
                primitive="--light-blue-500"
                semantic="--color-status-information"
              />
            </dd>
            <dd>
              <ColorItem
                title="Success"
                primitive="--green-800"
                semantic="--color-status-success"
              />
            </dd>
            <dd>
              <ColorItem
                title="Alert"
                primitive="--red-800"
                semantic="--color-status-alert"
              />
            </dd>
            <dd>
              <ColorItem
                title="Warning"
                primitive="--yellow-700"
                semantic="--color-status-warning"
              />
            </dd>
          </div>
        </div>
        <div className={Styles.status_dark__block}>
          <Headline as="dt" size="xs">
            Status Dark
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Infomation"
                primitive="--light-blue-700"
                semantic="--color-status-information-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Success"
                primitive="--green-700"
                semantic="--color-status-success-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Alert"
                primitive="--red-600"
                semantic="--color-status-alert-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Warning"
                primitive="--yellow-500"
                semantic="--color-status-warning-dark"
                dark
              />
            </dd>
          </div>
        </div>
        <div className={Styles.button_light__block}>
          <Headline as="dt" size="xs">
            Button Light
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Normal"
                primitive="--blue-800"
                semantic="--color-button-normal"
              />
            </dd>
            <dd>
              <ColorItem
                title="Hover"
                primitive="--blue-900"
                semantic="--color-button-hover"
              />
            </dd>
            <dd>
              <ColorItem
                title="Active"
                primitive="--blue-1100"
                semantic="--color-button-active"
              />
            </dd>
            <dd>
              <ColorItem
                title="Disabled BG"
                primitive="--grey-500"
                semantic="--color-button-disabled"
              />
            </dd>
          </div>
        </div>
        <div className={Styles.button_dark__block}>
          <Headline as="dt" size="xs">
            Button Dark
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Normal"
                primitive="--blue-500"
                semantic="--color-button-normal-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Hover"
                primitive="--blue-300"
                semantic="--color-button-hover-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Active"
                primitive="--blue-300"
                semantic="--color-button-active-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Disabled"
                primitive="--grey-600"
                semantic="--color-button-disabled-dark"
                dark
              />
            </dd>
          </div>
        </div>
        <div className={Styles.chart_light__block}>
          <Headline as="dt" size="xs">
            Chart Light
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Primary"
                primitive="--blue-800"
                semantic="--color-chart-primary"
              />
            </dd>
            <dd>
              <ColorItem
                title="Secondary"
                primitive="--blue-400"
                semantic="--color-chart-secondary"
              />
            </dd>
          </div>
        </div>
        <div className={Styles.chart_dark__block}>
          <Headline as="dt" size="xs">
            Chart Dark
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Primary"
                primitive="--blue-200"
                semantic="--color-chart-primary-dark"
                dark
              />
            </dd>
            <dd>
              <ColorItem
                title="Secondary"
                primitive="--blue-500"
                semantic="--color-chart-secondary-dark"
                dark
              />
            </dd>
          </div>
        </div>
        <div className={Styles.theme_background_dark__block}>
          <Headline as="dt" size="xs">
            Theme Background Dark
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Primary Color"
                primitive="--grey-900"
                semantic="--color-dark-theme-bg"
              />
            </dd>
          </div>
        </div>
        <div className={Styles.theme_background_light__block}>
          <Headline as="dt" size="xs">
            Theme Background Light
          </Headline>
          <div>
            <dd>
              <ColorItem
                title="Primary Color"
                primitive="--white"
                semantic="--color-light-theme-bg"
                dark
              />
            </dd>
          </div>
        </div>
      </dl>
    </section>
  );
};
