import AddNote from "./addnote";
import NoteList from "./noteList";

function SideBar() {
  return (
    <div className="bg-blue-200 w-[20%] h-full p-4 flex flex-col items-start justify-start">
      <h2 className="text-2xl">Notes</h2>
      <NoteList />

      <AddNote />
    </div>
  );
}

export default SideBar;
