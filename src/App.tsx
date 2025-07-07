import "./App.css";
import Main from "./Components/main";
import NoteList from "./Components/noteList";
import SideBar from "./Components/sideBar";

function App() {
  return (
    <main className="bg-green-100 h-screen flex items-center justify-center ">
      <div className="bg-blue-100 w-[80%] h-[80%] flex flex items-center justify-center bg-gradient-to-r from-purple-200 to-blue-200">
        <SideBar />

        <Main />
      </div>
    </main>
  );
}

export default App;
