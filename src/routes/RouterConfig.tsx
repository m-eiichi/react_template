import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/templates/main_layout";
import { Home } from "@/components/pages/home";
import { DialogPage } from "@/components/pages/ui_parts/dialog";
import { TablePage } from "@/components/pages/ui_parts/table";
import { EditPage } from "@/components/pages/ui_parts/input/edit";
import { ButtonPage } from "@/components/pages/ui_elements/button";
import { HeadlinePage } from "@/components/pages/ui_elements/headline";
import { InputElementPage } from "@/components/pages/ui_elements/input/input_element";
import { ReactTablePage } from "@/components/pages/react_table";
import { ReactSwrTablePage } from "@/components/pages/react_table_swr";
import { FakerReactTablePage } from "@/components/pages/react_table_faker";
import { ColorsPage } from "@/components/pages/style_rules/colors";
import { SpacesPage } from "@/components/pages/style_rules/spaces";
import { ImagesPage } from "@/components/pages/style_rules/images";
import { NotFound } from "@/components/pages/not_found";

import { VehiclePage } from "@/components/pages/vehicle_page";

export const RouterConfig: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="style-rules/colors" element={<ColorsPage />} />
          <Route path="style-rules/spaces" element={<SpacesPage />} />
          <Route path="style-rules/images" element={<ImagesPage />} />

          <Route path="ui-elements/button" element={<ButtonPage />} />
          <Route path="ui-elements/headline" element={<HeadlinePage />} />
          <Route
            path="ui-elements/input-element"
            element={<InputElementPage />}
          />
          <Route path="ui-parts/dialog" element={<DialogPage />} />
          <Route path="ui-parts/table" element={<TablePage />} />
          <Route path="ui-parts/edit" element={<EditPage />} />

          <Route path="project/react_table" element={<ReactTablePage />} />
          <Route
            path="project/react_table_swr"
            element={<ReactSwrTablePage />}
          />
          <Route
            path="project/react_table_faker"
            element={<FakerReactTablePage />}
          />

          <Route path="vehicle/:id" element={<VehiclePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
