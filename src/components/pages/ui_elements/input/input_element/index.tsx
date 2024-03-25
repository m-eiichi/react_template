import { z } from "zod";
import { type ReactElement } from "react";
import { useCustomForm } from "@/hooks/useCustomForm";
import { Edit } from "@/components/ui_parts/input/edit";
import { TextArea } from "@/components/ui_parts/input/textarea";
import { Select } from "@/components/ui_parts/input/select";
import { CheckBoxes } from "@/components/ui_parts/input/check_boxes";
import { RadioButtons } from "@/components/ui_parts/input/radio_buttons";
import { InputButton } from "@/components/ui_elements/input/button";
import { Headline } from "@/components/ui_elements/headline";

import { formSchema } from "./schemas";
import Styles from "./input_element_page.module.css";

const options = [
  { text: "選択してください", value: "" },
  { text: "aaa", value: "aaa" },
  { text: "bbb", value: "bbb" },
  { text: "ccc", value: "ccc" },
  { text: "ddd", value: "ddd" },
  { text: "eee", value: "eee" },
  { text: "fff", value: "fff" },
];

const checkbox_item = [
  {
    id: "0",
    text: "寿司",
    value: "sushi",
    checked: true,
  },
  {
    id: "1",
    text: "焼肉",
    value: "yakiniku",
    disabled: true,
  },
  {
    id: "2",
    text: "カオマンガイ",
    subtext: "kao_mangai",
    value: "khao_mangai",
  },
];
const checkbox_item2 = [
  {
    id: "3",
    text: "寿司",
    value: "sushi",
  },
  {
    id: "4",
    text: "焼肉",
    value: "yakiniku",
  },
  {
    id: "5",
    text: "カオマンガイ",
    subtext: "kao_mangai",
    value: "khao_mangai",
  },
];
const checkbox_item3 = [
  {
    id: "6",
    text: "寿司",
    subtext: "sushi",
    value: "sushi",
  },
  {
    id: "7",
    text: "焼肉",
    subtext: "yakiniku",
    value: "yakiniku",
  },
  {
    id: "8",
    text: "カオマンガイ",
    subtext: "kao_mangai",
    value: "khao_mangai",
  },
];
const checkbox_item4 = [
  {
    id: "9",
    text: "寿司",
    subtext: "sushi",
    value: "sushi",
  },
  {
    id: "10",
    text: "焼肉",
    subtext: "yakiniku",
    value: "yakiniku",
  },
  {
    id: "11",
    text: "カオマンガイ",
    subtext: "kao_mangai",
    value: "khao_mangai",
  },
];
const radiobuttons_item = [
  {
    id: "ra_01",
    text: "寿司",
    subText: "sushi",
    value: "sushi",
    // checked: true,
  },
  {
    id: "ra_02",
    text: "焼肉",
    subText: "yakiniku",
    value: "yakiniku",
    disabled: true,
  },
  {
    id: "ra_03",
    text: "カオマンガイ",
    subText: "kao_mangai",
    value: "khao_mangai",
  },
];
// const radiobuttons_item2 = [
//   {
//     id: "ra_04",
//     text: "寿司",
//     subText: "sushi",
//     value: "sushi",
//   },
//   {
//     id: "ra_05",
//     text: "焼肉",
//     subText: "yakiniku",
//     value: "yakiniku",
//   },
//   {
//     id: "ra_06",
//     text: "カオマンガイ",
//     subText: "kao_mangai",
//     value: "khao_mangai",
//   },
// ];
// const radiobuttons_item3 = [
//   {
//     id: "ra_07",
//     text: "寿司",
//     subText: "sushi",
//     value: "sushi",
//   },
//   {
//     id: "ra_08",
//     text: "焼肉",
//     subText: "yakiniku",
//     value: "yakiniku",
//   },
//   {
//     id: "ra_09",
//     text: "カオマンガイ",
//     subText: "kao_mangai",
//     value: "khao_mangai",
//   },
// ];
// const radiobuttons_item4 = [
//   {
//     id: "ra_10",
//     text: "寿司",
//     subText: "sushi",
//     value: "sushi",
//   },
//   {
//     id: "ra_11",
//     text: "焼肉",
//     subText: "yakiniku",
//     value: "yakiniku",
//   },
//   {
//     id: "ra_12",
//     text: "カオマンガイ",
//     subText: "kao_mangai",
//     value: "khao_mangai",
//   },
// ];
export const InputElementPage = (): ReactElement => {
  const defaultValues = {
    any: "",
    number: "",
    email: "",
    password: "",
    tel: "",
    url: "",
    date: "",
    week: "",
    month: "",
    datetimeLocal: "",
    time: "",
    hidden: "",
    checkbox: [],
    checkbox2: [],
    checkbox3: [],
    checkbox4: [],
    radiobuttons: "",
    radiobuttons2: "",
    radiobuttons3: "",
    radiobuttons4: "",
  };

  const { register, handleSubmit, errors } = useCustomForm(
    formSchema,
    defaultValues,
  );
  type FormSchema = z.infer<typeof formSchema>;
  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };
  return (
    <section className={Styles.large_section}>
      <Headline size="xl">React Vite Project</Headline>
      <Headline size="m">&lt; Default Input Element &gt;</Headline>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <ul className={Styles.form__list} role="list">
          <li>
            InputElementRHF
            <Headline size="xs">E-Mail</Headline>
            <Edit
              id="email1"
              type="email"
              placeholder="placeholder"
              fullWidth
              name="email2"
            />
            <Edit
              label="email2"
              requirement
              supportText="サポートテキスト"
              id="email"
              type="email"
              placeholder="placeholder"
              fullWidth
              name="email"
              register={register("email")}
              errors={errors.email}
              disabled
              readonly
              defaultvalue="aaa"
            />
          </li>
          <li>
            <Headline size="xs">Numder</Headline>
            <Edit
              label="number"
              requirement
              supportText="サポートテキスト"
              id="number"
              type="number"
              placeholder="placeholder"
              name="number"
              register={register("number")}
              errors={errors.number}
            />
          </li>
          <li>
            <Headline size="xs">Password</Headline>
            <Edit
              label="password"
              requirement
              supportText="サポートテキスト"
              id="password"
              type="password"
              placeholder="placeholder"
              name="password"
              register={register("password")}
              errors={errors.password}
            />
          </li>
          <li>
            <Headline size="xs">Search</Headline>
            <Edit
              label="search"
              supportText="サポートテキスト"
              id="search"
              type="search"
              placeholder="placeholder"
              name="any"
              register={register("any")}
              errors={errors.any}
            />
          </li>
          <li>
            <Headline size="xs">Tel</Headline>
            <Edit
              label="tel"
              requirement
              supportText="サポートテキスト"
              id="tel"
              type="tel"
              placeholder="placeholder"
              name="tel"
              register={register("tel")}
              errors={errors.tel}
            />
          </li>
          <li>
            <Headline size="xs">Url</Headline>
            <Edit
              label="url"
              requirement
              supportText="サポートテキスト"
              id="url"
              type="url"
              placeholder="placeholder"
              name="url"
              register={register("url")}
              errors={errors.url}
            />
          </li>
          <li>
            <Headline size="xs">Date</Headline>
            <Edit
              label="date"
              requirement
              supportText="サポートテキスト"
              id="date"
              type="date"
              name="date"
              register={register("date")}
              errors={errors.date}
            />
          </li>
          <li>
            <Headline size="xs">Week</Headline>
            <Edit
              label="week"
              requirement
              supportText="サポートテキスト"
              id="week"
              type="week"
              name="week"
              register={register("week")}
              errors={errors.week}
            />
          </li>
          <li>
            <Headline size="xs">Month</Headline>
            <Edit
              label="month"
              requirement
              supportText="サポートテキスト"
              id="month"
              type="month"
              name="month"
              register={register("month")}
              errors={errors.month}
            />
          </li>
          <li>
            <Headline size="xs">Datetime Local</Headline>
            <Edit
              label="datetimeLocal"
              requirement
              supportText="サポートテキスト"
              id="datetimeLocal"
              type="datetime-local"
              name="datetimeLocal"
              register={register("datetimeLocal")}
              errors={errors.datetimeLocal}
            />
          </li>
          <li>
            <Headline size="xs">Time</Headline>
            <Edit
              label="time"
              requirement
              supportText="サポートテキスト"
              id="time"
              type="time"
              name="time"
              register={register("time")}
              errors={errors.time}
            />
          </li>

          <li>
            <Headline size="xs">Color</Headline>
            <Edit
              label="color"
              requirement
              supportText="サポートテキスト"
              id="color"
              type="color"
              name="color"
              register={register("color")}
              errors={errors.color}
            />
          </li>
          <li>
            <Headline size="xs">File</Headline>
            <Edit
              label="file"
              requirement
              supportText="サポートテキスト"
              id="file"
              type="file"
              name="file"
              register={register("file")}
              errors={errors.file}
            />
          </li>
          <li>
            <Headline size="xs">Range</Headline>
            <Edit
              label="range"
              supportText="サポートテキスト"
              id="range"
              type="range"
              name="range"
              register={register("range")}
              errors={errors.range}
            />
          </li>
          <li>
            <Headline size="xs">Text Area</Headline>
            <TextArea
              label="textarea"
              supportText="サポートテキスト"
              id="textarea"
              placeholder="placeholder"
              rows={10}
              cols={100}
              name="textarea"
              register={register("textarea")}
              errors={errors.textarea}
            />
          </li>
          <li>
            <Headline size="xs">Select</Headline>
            <Select
              label="select"
              supportText="サポートテキスト"
              id="select"
              options={options}
              name="select"
              register={register("select")}
              errors={errors.select}
              defaultvalue={"aaa"}
            />
          </li>

          <li>
            <Headline size="xs">Check Box</Headline>
            <CheckBoxes
              supportText="1つ以上選択（複数選択可）"
              name="checkbox"
              register={register("checkbox")}
              items={checkbox_item}
              errors={errors.checkbox}
            />
          </li>
          <li>
            <CheckBoxes
              supportText="1つ以上選択（複数選択可）"
              name="checkbox2"
              register={register("checkbox2")}
              items={checkbox_item2}
              errors={errors.checkbox2}
              vertical
            />
          </li>
          <li>
            <CheckBoxes
              supportText="1つ以上選択（複数選択可）"
              name="checkbox3"
              register={register("checkbox3")}
              items={checkbox_item3}
              errors={errors.checkbox3}
              tile
            />
          </li>
          <li>
            <CheckBoxes
              supportText="1つ以上選択（複数選択可）"
              name="checkbox4"
              register={register("checkbox4")}
              items={checkbox_item4}
              errors={errors.checkbox4}
              vertical
              tile
            />
          </li>

          <li>
            <Headline size="xs">Radio Box</Headline>
            <RadioButtons
              label="radiobuttons default"
              requirement={true}
              name="radiobuttons"
              supportText="いずれかひとつ選択してください"
              register={register("radiobuttons")}
              items={radiobuttons_item}
              errors={errors.radiobuttons}
            />
          </li>
          {/*  <li>
            <RadioButtons
              label={{
                text: "radiobuttons vertical",
                requirement: true,
              }}
              supportText="いずれかひとつ選択してください"
              register={register("radiobuttons2")}
              items={radiobuttons_item2}
              errors={errors.radiobuttons2}
              vertical
            />
          </li>
          <li>
            <RadioButtons
              label={{
                text: "radiobuttons tile",
                requirement: true,
              }}
              supportText="いずれかひとつ選択してください"
              register={register("radiobuttons3")}
              items={radiobuttons_item3}
              errors={errors.radiobuttons3}
              tile
            />
          </li>
          <li>
            <RadioButtons
              label={{
                text: "radiobuttons tile vertical",
                requirement: true,
              }}
              supportText="いずれかひとつ選択してください"
              register={register("radiobuttons4")}
              items={radiobuttons_item4}
              errors={errors.radiobuttons4}
              vertical
              tile
            />
          </li>*/}

          <li>
            <Headline size="xs">Button</Headline>
            <div className={Styles.form__list__button}>
              <InputButton value="Button" fullWidth />
              <InputButton type="reset" color="secondary" value="RESET" />
              <InputButton type="submit" color="tertiary" value="Submit" />
            </div>
          </li>
        </ul>
      </form>
    </section>
  );
};
