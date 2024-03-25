import { z } from "zod";
import { type ReactElement } from "react";
import { useCustomForm } from "@/hooks/useCustomForm";
import { Headline } from "@/components/ui_elements/headline";
import { Edit } from "@/components/ui_parts/input/edit";
import { InputButton } from "@/components/ui_elements/input/button";
import { formSchema } from "./schemas";
import Styles from "./edit_page.module.css";

export const EditPage = (): ReactElement => {
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
      <Headline size="xl">React Template</Headline>
      <Headline size="m">&lt; Default Input Element &gt;</Headline>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <ul className={Styles.form__list} role="list">
          <li>
            InputElementRHF
            <Headline size="xs">E-Mail</Headline>
            {/* <Edit
              id="email1"
              type="email"
              placeholder="placeholder"
              fullWidth
              name="email2"
            /> */}
            <Edit
              label="email"
              requirement
              supportText="サポートテキスト"
              id="email"
              type="email"
              placeholder="placeholder"
              fullWidth
              name="email"
              register={register("email")}
              errors={errors.email}
              // disabled
              // readonly
              // defaultvalue="aaa"
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
