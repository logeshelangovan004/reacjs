import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Logi from "./Logi";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Logi />
  </StrictMode>
);
