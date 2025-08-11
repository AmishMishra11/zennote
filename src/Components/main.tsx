import { useEffect, useRef, useState } from "react";
import type { Note } from "../Types/Note";
import { useNote } from "../Context/Notes/useNote";

function Main() {
  const contentInputRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { stateNote, dispatchNote } = useNote();

  const { currentNote } = stateNote;

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  // const [saving, setSaving] = useState<boolean>(false);
  const [existingNote, setExistingNote] = useState<boolean>(false);

  // const buttonTitle = saving ? "Saving note..." : "Click to update note";

  useEffect(() => {
    console.log("Current note updated:", currentNote);
    if (currentNote) {
      console.log("Setting title and content from current note");
      setTitle(currentNote.title);
      setContent(currentNote.content);
    } else {
      console.log("No current note, resetting title and content");
      setTitle("");
      setContent("");
      setExistingNote(false);
    }
  }, [currentNote]);

  const saveNote = () => {
    console.log("saving", existingNote);

    if (existingNote) {
      const updatedNote: Note = {
        ...currentNote,
        title,
        content,
        updatedAt: new Date(),
      };
      dispatchNote({
        type: "UPDATE_NOTE",
        payload: updatedNote,
      });
      console.log("Updating existing note");
      return;
    } else {
      console.log("Adding new note");
      setExistingNote(true);
      const newNote: Note = {
        id: crypto.randomUUID(),
        title,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      dispatchNote({ type: "ADD_NOTE", payload: newNote });

      // setTitle("");
      // setContent("");
    }
  };

  useEffect(() => {
    console.log("effect");

    if (!title.trim() && !content.trim()) {
      console.log("No content to save, exiting effect");
      return;
    }
    const timerId = setTimeout(() => {
      saveNote();
    }, 500);

    return () => clearTimeout(timerId);
  }, [title, content]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4 bg-blue-100">
      <input
        className="border-2 border-red-500 rounded-md p-2 m-2 w-full "
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            contentInputRef.current?.focus();
          }
        }}
        autoFocus
        autoComplete="on"
        spellCheck="true"
        maxLength={50}
        minLength={1}
        pattern=".*\S.*" // Ensures at least one non-whitespace character
        title="Content must contain at least one non-whitespace character"
        required
      />
      <textarea
        className="border-2 border-orange-500 rounded-md p-2 m-2 w-full h-full "
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        ref={contentInputRef}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            buttonRef.current?.focus();
          }
        }}
      />

      {/* <button
        className="bg-blue-300 p-4 rounded-xl text-blakc-700"
        onClick={saveNote}
        ref={buttonRef}
        disabled={saving || !title.trim() || !content.trim()}
        title={buttonTitle}
      >
        {buttonTitle}
      </button> */}
    </div>
  );
}

export default Main;
