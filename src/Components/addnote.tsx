import { useNote } from "../Context/Notes/useNote";
import type { Note } from "../Types/Note";

function AddNote() {
  const { dispatchNote } = useNote();

  const handleClick = (note: Note | null) => {
    console.log("AddNote clicked");
    dispatchNote({
      type: "SET_CURRENT_NOTE",
      payload: note,
    });
  };
  return (
    <button
      className="mt-auto hover:bg-pink-200"
      onClick={() => handleClick(null)}
    >
      AddNote
    </button>
  );
}

export default AddNote;
