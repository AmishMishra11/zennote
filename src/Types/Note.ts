export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NoteListProps {
  notes: Note[];
}

export interface NoteState {
  notes: Note[];
  currentNote: Note | null;
}

export type NoteAction =
  | { type: "ADD_NOTE"; payload: Note }
  | { type: "UPDATE_NOTE"; payload: Note }
  | { type: "DELETE_NOTE"; payload: string }
  | { type: "SET_CURRENT_NOTE"; payload: Note | null };

export interface NoteContextType {
  stateNote: NoteState;
  dispatchNote: React.Dispatch<NoteAction>;
}
