import { useEffect, type ReactElement } from "react";

import { z } from "zod";
import { createCheckBoxValidate } from "@/utils/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckBoxes } from "../..";

import { CheckBoxesRhfForSbProps } from "./types";

/**
 * RadioButtonsコンポーネント作成
 *
 * @property props : RadioButtonsRhfForSbProps
 * @returns StoryBook用のコンポーネント
 */
export const CheckBoxesRhf = (props: CheckBoxesRhfForSbProps): ReactElement => {
  const {
    items,
    name,
    label,
    requirement,
    supportText,
    size,
    vertical,
    tile,
    min,
    max,
  } = props;
  const zod_rule = "test";
  const z_obj: any = z.object({
    [zod_rule]: createCheckBoxValidate({ name, min, max }),
  });

  type Schema = z.infer<typeof z_obj>;

  const {
    register,
    formState: { errors },
    trigger,
  } = useForm<Schema>({
    defaultValues: { [zod_rule]: "" },
    resolver: zodResolver(z_obj),
    mode: "onTouched",
  });

  useEffect(() => {
    trigger(zod_rule);
  });

  return (
    <>
      <CheckBoxes
        label={label}
        requirement={requirement}
        supportText={supportText}
        name={name}
        size={size}
        items={items}
        register={register(zod_rule)}
        errors={errors[zod_rule]}
        vertical={vertical}
        tile={tile}
      />
    </>
  );
};
