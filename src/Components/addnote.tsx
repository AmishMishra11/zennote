import { useNote } from "../Context/Notes/useNote";
import type { Note } from "../Types/Note";

function AddNote() {
  const { dispatchNote } = useNote();

  const newNote: Note = {
    id: crypto.randomUUID(),
    title: "New Note",
    content: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const handleClick = (newNote: Note) => {
    console.log("AddNote clicked");
    dispatchNote({ type: "ADD_NOTE", payload: newNote });
    dispatchNote({
      type: "SET_CURRENT_NOTE",
      payload: newNote,
    });
  };
  return (
    <button
      className="mt-auto w-full py-3 rounded-full bg-blue-300 hover:bg-pink-200"
      onClick={() => handleClick(newNote)}
    >
      AddNote
    </button>
  );
}

export default AddNote;
