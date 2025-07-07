import { useNote } from "../Context/Notes/useNote";
import type { Note } from "../Types/Note";

function NoteList() {
  const { stateNote, dispatchNote } = useNote();

  const { notes } = stateNote;

  const handleClick = (note: Note) => {
    dispatchNote({
      type: "SET_CURRENT_NOTE",
      payload: note,
    });
  };

  return (
    <main>
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes available</p>
      ) : (
        notes.map((notes) => (
          <p
            className="hover:bg-orange-400 hover:cursor-pointer"
            key={notes.id}
            onClick={() => handleClick(notes)}
          >
            {notes.title}
          </p>
        ))
      )}
    </main>
  );
}

export default NoteList;
