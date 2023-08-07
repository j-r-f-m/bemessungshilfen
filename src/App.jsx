import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/balkenBewehrung" element={<BeamReinforcement />} />
        <Route path="/anchorageLength" element={<AnchorageLength />} /> */}
      </Routes>
    </>
  );
}

export default App;
