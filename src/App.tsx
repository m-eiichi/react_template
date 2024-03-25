import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./routes/RouterConfig";
import { type ReactElement } from "react";

function App(): ReactElement {
  return (
    <BrowserRouter basename="/react_template">
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
