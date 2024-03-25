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
  any: createAnyValidate(),
  email: createEmailValidate({ name: "メールアドレス" }),
  number: createNumberValidate({ name: "", min: 0, max: 10 }),
  password: createPasswordValidate({
    name: "",
    min_length: 8,
    req_char: true,
    req_number: true,
    req_symbol: true,
  }),
  tel: createTextValidate({ input_type: "tel" }),
  url: createUrlValidate({}),
  date: createDateTimeValidate({}),
  week: createAnyValidate(),
  month: createAnyValidate(),
  datetimeLocal: createDateTimeValidate({}),
  time: createAnyValidate(),
  color: createAnyValidate(),
  file: createAnyValidate(),
  range: createAnyValidate(),
});
