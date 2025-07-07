import type { NoteState, NoteAction } from "../Types/Note";

export const NoteReducer = (
  state: NoteState,
  action: NoteAction
): NoteState => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case "SET_CURRENT_NOTE":
      return { ...state, currentNote: action.payload };
    default:
      return state;
  }
};
