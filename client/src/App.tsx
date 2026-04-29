import { Route, Routes } from "react-router-dom";
import "./index.css";
import History from "./pages/history";
import Launch from "./pages/launch";
import Missions from "./pages/missions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Launch />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;
