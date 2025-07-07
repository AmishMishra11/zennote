import { createContext } from "react";
import type { NoteContextType } from "../../Types/Note";

export const NoteContext = createContext<NoteContextType | undefined>(
  undefined
);
