import { z } from "zod";
import {
  createAnyValidate,
  createEmailValidate,
  createNumberValidate,
  createPasswordValidate,
  createTextValidate,
  createUrlValidate,
  createDateTimeValidate,
} from "@/utils/validation";

export const formSchema = z.object({
  email: z.any(),
  number: createAnyValidate(),
  password: createAnyValidate(),
  tel: createAnyValidate(),
  url: createAnyValidate(),
  date: createAnyValidate(),
  range: createAnyValidate(),
  email_rhf: createEmailValidate({ name: "メールアドレス" }),
  number_rhf: createNumberValidate({ name: "", min: 0, max: 10 }),
  password_rhf: createPasswordValidate({
    name: "",
    min_length: 8,
    req_char: true,
    req_number: true,
    req_symbol: true,
  }),
  tel_rhf: createTextValidate({ input_type: "tel" }),
  url_rhf: createUrlValidate({}),
  date_rhf: createDateTimeValidate({}),
  range_rhf: createAnyValidate(),
});
