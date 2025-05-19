import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { LogementProvider } from './context/LogementContext.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LogementProvider>
        <App />
      </LogementProvider>
    </BrowserRouter>
  </StrictMode>
);
