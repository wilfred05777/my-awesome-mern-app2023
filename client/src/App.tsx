import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import SidebarNav from "./components/sidebarnav/SidebarNav";
import { Routes, Route } from "react-router-dom";
import Settings from "./screens/settings/Settings";
import Write from "./screens/write/Write";
import Media from "./screens/media/Media";
import Audio from "./screens/audio/Audio";
import Titles from "./screens/titles/titles";
import Notes from "./screens/notes/Notes";
import Records from "./screens/records/Records";
import Question from "./screens/question/Question";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <SidebarNav />
      <Routes>
        <Route path="/" element={<Settings />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/media" element={<Media />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/subtitles" element={<Titles />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/records" element={<Records />} />
        <Route path="/write" element={<Write />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
