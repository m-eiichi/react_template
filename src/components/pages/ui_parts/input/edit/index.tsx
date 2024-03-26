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
    email: "",
    email_rhf: "",
    number: "",
    number_rhf: "",
    password: "",
    password_rhf: "",
    tel: "",
    tel_rhf: "",
    url: "",
    url_rhf: "",
    date: "",
    date_rhf: "",
    range: "",
    range_rhf: "",
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
      <Headline size="m">&lt; Edit &gt;</Headline>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <ul className={Styles.form_list} role="list">
          <li>
            <Headline size="xs">Text</Headline>
            <div className={Styles.edit_container}>
              <Edit
                size="l"
                label="text size l(バリデーション無し)"
                // requirement
                supportText="サポートテキスト"
                id="text" //labelとinputの紐付け（id/for）
                type="text"
                placeholder="placeholder"
                name="text"
                // register={register("text")} rhfを使用しない場合は不要
                // errors={errors.text} rhfを使用しない場合は不要
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
              <Edit
                size="m"
                label="text size m(バリデーション無し)"
                // requirement
                supportText="サポートテキスト"
                id="text" //labelとinputの紐付け（id/for）
                type="text"
                placeholder="placeholder"
                name="text"
                // register={register("text")} rhfを使用しない場合は不要
                // errors={errors.text} rhfを使用しない場合は不要
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
              <Edit
                size="s"
                label="text size s(バリデーション無し)"
                // requirement
                supportText="サポートテキスト"
                id="text" //labelとinputの紐付け（id/for）
                type="text"
                placeholder="placeholder"
                name="text"
                // register={register("text")} rhfを使用しない場合は不要
                // errors={errors.text} rhfを使用しない場合は不要
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
              <Edit
                label="text full width(バリデーション無し)"
                // requirement
                supportText="サポートテキスト"
                id="text" //labelとinputの紐付け（id/for）
                type="text"
                placeholder="placeholder"
                name="text"
                // register={register("text")} rhfを使用しない場合は不要
                // errors={errors.text} rhfを使用しない場合は不要
                fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
              <Edit
                label="text disabled(バリデーション無し)"
                // requirement
                supportText="サポートテキスト"
                id="text" //labelとinputの紐付け（id/for）
                type="text"
                placeholder="placeholder"
                name="text"
                // register={register("text")} rhfを使用しない場合は不要
                // errors={errors.text} rhfを使用しない場合は不要
                // fullWidth
                disabled
                // readonly
                // defaultvalue=""
              />
              <Edit
                label="text readonly(バリデーション無し)"
                // requirement
                supportText="サポートテキスト"
                id="text" //labelとinputの紐付け（id/for）
                type="text"
                placeholder="placeholder"
                name="text"
                // register={register("text")} rhfを使用しない場合は不要
                // errors={errors.text} rhfを使用しない場合は不要
                // fullWidth
                // disabled
                readonly
                // defaultvalue=""
              />
            </div>
          </li>
          <li>
            <Headline size="xs">E-Mail</Headline>
            <Edit
              id="email1"
              type="email"
              placeholder="placeholder"
              // fullWidth
              name="email2"
            />
            <Edit
              label="email"
              requirement
              supportText="サポートテキスト"
              id="email"
              type="email"
              placeholder="placeholder"
              // fullWidth
              name="email"
              register={register("email")}
              errors={errors.email}
              // disabled
              // readonly
              // defaultvalue="aaa"
            />
            <div className={Styles.edit_container}>
              <Edit
                label="email(バリデーション無し)"
                // requirement
                supportText="サポートテキスト"
                id="email" //labelとinputの紐付け（id/for）
                type="email"
                placeholder="placeholder"
                name="email"
                register={register("email")}
                errors={errors.email}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
              <Edit
                label="email rhf(バリデーション有り)"
                requirement
                supportText="サポートテキスト"
                id="email_rhf" //labelとinputの紐付け（id/for）
                type="email"
                placeholder="placeholder"
                name="email_rhf"
                register={register("email_rhf")}
                errors={errors.email_rhf}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
            </div>
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
            <div className={Styles.edit_container}>
              <Edit
                label="number(バリデーション無し)"
                // requirement
                supportText="サポートテキスト"
                id="number" //labelとinputの紐付け（id/for）
                type="number"
                // placeholder="placeholder"
                name="number"
                register={register("number")}
                errors={errors.number}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
              <Edit
                label="number rhf(バリデーション有り)"
                requirement
                supportText="サポートテキスト"
                id="number_rhf" //labelとinputの紐付け（id/for）
                type="number"
                // placeholder="placeholder"
                name="number_rhf"
                register={register("number_rhf")}
                errors={errors.number_rhf}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
            </div>
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
            <div className={Styles.edit_container}>
              <Edit
                label="password(バリデーション無し)"
                // requirement
                supportText="サポートテキスト"
                id="password" //labelとinputの紐付け（id/for）
                type="password"
                // placeholder="placeholder"
                name="password"
                register={register("password")}
                errors={errors.password}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
              <Edit
                label="password rhf(バリデーション有り)"
                requirement
                supportText="サポートテキスト"
                id="password_rhf" //labelとinputの紐付け（id/for）
                type="password"
                // placeholder="placeholder"
                name="password_rhf"
                register={register("password_rhf")}
                errors={errors.password_rhf}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
            </div>
          </li>
          {/* <li>
             <Headline size="xs">Search</Headline>
             <Edit
               label="search"
               register={register("any")}
               errors={errors.any}
             />
           </li> */}
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
            <div className={Styles.edit_container}>
              <Edit
                label="tel(バリデーション無し)"
                // requirement
                supportText="サポートテキスト"
                id="tel" //labelとinputの紐付け（id/for）
                type="tel"
                // placeholder="placeholder"
                name="tel"
                register={register("tel")}
                errors={errors.tel}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
              <Edit
                label="tel rhf(バリデーション有り)"
                requirement
                supportText="サポートテキスト"
                id="tel_rhf" //labelとinputの紐付け（id/for）
                type="tel"
                // placeholder="placeholder"
                name="tel_rhf"
                register={register("tel_rhf")}
                errors={errors.tel_rhf}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
            </div>
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
            <div className={Styles.edit_container}>
              <Edit
                label="url(バリデーション無し)"
                // requirement
                supportText="サポートテキスト"
                id="url" //labelとinputの紐付け（id/for）
                type="url"
                // placeholder="placeholder"
                name="url"
                register={register("url")}
                errors={errors.url}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
              <Edit
                label="url rhf(バリデーション有り)"
                requirement
                supportText="サポートテキスト"
                id="url_rhf" //labelとinputの紐付け（id/for）
                type="url"
                // placeholder="placeholder"
                name="url_rhf"
                register={register("url_rhf")}
                errors={errors.url_rhf}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
            </div>
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
            <div className={Styles.edit_container}>
              <Edit
                label="date(バリデーション無し)"
                // requirement
                supportText="サポートテキスト"
                id="date" //labelとinputの紐付け（id/for）
                type="date"
                // placeholder="placeholder"
                name="date"
                register={register("date")}
                errors={errors.date}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
              <Edit
                label="date rhf(バリデーション有り)"
                requirement
                supportText="サポートテキスト"
                id="date_rhf" //labelとinputの紐付け（id/for）
                type="date"
                // placeholder="placeholder"
                name="date_rhf"
                register={register("date_rhf")}
                errors={errors.date_rhf}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
            </div>
          </li>
          {/*<li>
             <Headline size="xs">Week</Headline>
             <Edit
               label="week"
               register={register("file")}
               errors={errors.file}
             />
           </li>
           </li>*/}
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
            <div className={Styles.edit_container}>
              <Edit
                label="range(バリデーション無し)"
                // requirement
                supportText="サポートテキスト"
                id="range" //labelとinputの紐付け（id/for）
                type="range"
                // placeholder="placeholder"
                name="range"
                register={register("range")}
                errors={errors.range}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
              <Edit
                label="range rhf(バリデーション有り)"
                requirement
                supportText="サポートテキスト"
                id="range_rhf" //labelとinputの紐付け（id/for）
                type="range"
                // placeholder="placeholder"
                name="range_rhf"
                register={register("range_rhf")}
                errors={errors.range_rhf}
                // fullWidth
                // disabled
                // readonly
                // defaultvalue=""
              />
            </div>
          </li>
          <li>
            <Headline size="xs">Button</Headline>
            <div className={Styles.form_list_button}>
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
