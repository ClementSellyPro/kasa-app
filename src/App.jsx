import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
