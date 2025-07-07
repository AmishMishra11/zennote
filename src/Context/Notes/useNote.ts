import { useContext } from "react";
import { NoteContext } from "./NoteContext";

export const useNote = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNote must be used within a NoteContextProvider");
  }
  return context;
};
