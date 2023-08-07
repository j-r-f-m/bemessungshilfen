import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/balkenBewehrung" element={<BeamReinforcement />} />
        <Route path="/anchorageLength" element={<AnchorageLength />} /> */}
      </Routes>
    </>
  );
}

export default App;
