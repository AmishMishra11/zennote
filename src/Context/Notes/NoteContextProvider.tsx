import { type ReactNode, useReducer } from "react";
import { NoteContext } from "./NoteContext";
import { NoteReducer } from "../../Reducers/NoteReducer";
import type { NoteState, NoteContextType } from "../../Types/Note";

const initialState: NoteState = {
  notes: [],
  currentNote: null,
};

type NoteContextProviderProps = {
  children: ReactNode;
};

const NoteContextProvider = ({ children }: NoteContextProviderProps) => {
  const [stateNote, dispatchNote] = useReducer(NoteReducer, initialState);

  const contextValue: NoteContextType = { stateNote, dispatchNote };

  return (
    <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>
  );
};

export default NoteContextProvider;
