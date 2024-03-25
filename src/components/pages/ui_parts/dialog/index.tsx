import { useDialog } from "@/components/ui_parts/dialog/useDialog";
import { type ReactElement } from "react";

import { Button } from "@/components/ui_elements/button";
import { DialogContent } from "@/components/ui_parts/dialog/dialog_content";
import { DialogPortal } from "@/components/ui_parts/dialog/dialog_portal";

import { CustomDialogContent } from "@/components/features/custom_dialog_content";

import Styles from "./dialog_page.module.css";

export const DialogPage = (): ReactElement => {
  const {
    Dialog: Dialog1,
    open: dialog_01_open,
    close: dialog_01_close,
  } = useDialog("dialog_01");
  const {
    Dialog: Dialog2,
    open: dialog_02_open,
    close: dialog_02_close,
  } = useDialog("dialog_02");
  const {
    Dialog: Dialog3,
    open: dialog_03_open,
    close: dialog_03_close,
  } = useDialog("dialog_03");
  const {
    Dialog: Dialog4,
    open: dialog_04_open,
    close: dialog_04_close,
  } = useDialog("dialog_04");

  const dialog_01_ok = () => {
    console.log("OK");
    dialog_03_open();
  };
  const dialog_03_ok = () => {
    console.log("OK");
    dialog_01_close();
    dialog_03_close();
  };

  return (
    <section className={Styles.large_section}>
      <p>
        Dialog A<br />
        OKボタンを押下した場合確認のダイアログが表示される使用。
      </p>
      <p>
        Dialog B<br />
        シンプルなダイアログ
      </p>
      <p>
        Custom Dialog
        <br />
        カスタムダイアログ
      </p>
      <Button onClick={dialog_01_open}>open Dialog A</Button>
      <Button onClick={dialog_02_open}>open Dialog B</Button>
      <Button onClick={dialog_04_open}>open Custom Dialog</Button>

      <DialogPortal>
        <Dialog1>
          <DialogContent
            title="dialog A"
            desc="dialog A description dialog A description dialog A description dialog A description dialog A description dialog A description"
            button01={{ children: "OK", onClick: dialog_01_ok }}
            button02={{ children: "Cancel", onClick: dialog_01_close }}
          />
        </Dialog1>
      </DialogPortal>
      <DialogPortal>
        <Dialog2>
          <DialogContent
            title="dialog B"
            desc="dialog B description"
            button01={{ children: "OK", onClick: dialog_02_close }}
            button02={{ children: "Cancel", onClick: dialog_02_close }}
          />
        </Dialog2>
      </DialogPortal>
      <DialogPortal>
        <Dialog3 size="s">
          <DialogContent
            title="dialog C"
            desc="dialog C description"
            button01={{ children: "open dialog C", onClick: dialog_03_ok }}
          />
        </Dialog3>
      </DialogPortal>
      <DialogPortal>
        <Dialog4>
          <CustomDialogContent
            send={dialog_04_close}
            cancel={dialog_04_close}
          />
        </Dialog4>
      </DialogPortal>
    </section>
  );
};
