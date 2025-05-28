import type { Note } from "../App";

type noteListProps = {
  notes: Note[];
};

function NoteList({ notes }: noteListProps) {
  console.log(notes);
  return (
    <main>
      <h2 className="text-2xl">Notes</h2>

      {notes.length === 0 ? (
        <p className="text-gray-500">No notes available</p>
      ) : (
        notes.map((notes) => <p>{notes.title}</p>)
      )}
    </main>
  );
}

export default NoteList;
