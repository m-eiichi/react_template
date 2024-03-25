import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@/components/ui_parts/header";

import { MainLayoutContent } from "@/components/templates/main_layout/main_layout_content";

export const MainLayout = (): ReactElement => {
  return (
    <>
      <Header />
      <MainLayoutContent>
        <Outlet />
      </MainLayoutContent>
    </>
  );
};
