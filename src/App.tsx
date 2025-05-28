import { useRef, useState } from "react";

import "./App.css";
import NoteList from "./Components/noteList";

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

function App() {
  const contentInputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [notes, setNotes] = useState<Note[]>([]);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [saving, setSaving] = useState<boolean>(false);

  const buttonTitle = saving ? "Saving note..." : "Click to update note";

  const saveNote = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 1000);
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);

    setTitle("");
    setContent("");
  };

  return (
    <main className="bg-green-100 h-screen flex items-center justify-center ">
      <div className="bg-blue-100 w-[80%] h-[80%] flex flex-col items-center justify-center bg-gradient-to-r from-purple-200 to-blue-200">
        <h1 className="text-red-400 text-4xl">test</h1>
        <section className="flex flex-col items-center">
          <NoteList notes={notes} />
        </section>
        <h3>count is: {notes.length}</h3>

        <input
          className="border-2 border-red-500 rounded-md p-2 m-2"
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
        <input
          className="border-2 border-orange-500 rounded-md p-2 m-2"
          type="text"
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

        <button
          className="bg-blue-700 p-4 rounded-xl text-green-700"
          onClick={saveNote}
          ref={buttonRef}
          disabled={saving || !title.trim() || !content.trim()}
          title={buttonTitle}
        >
          {buttonTitle}
        </button>
      </div>
    </main>
  );
}

export default App;
