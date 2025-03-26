import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CarProvider } from "./context/CarContext";

createRoot(document.getElementById("root")).render(
  <CarProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CarProvider>
);
