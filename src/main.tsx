import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import NoteContextProvider from "./Context/Notes/NoteContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NoteContextProvider>
      <App />
    </NoteContextProvider>
  </StrictMode>
);
