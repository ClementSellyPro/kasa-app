import { Route, Routes } from "react-router";
import "./App.scss";
import { LogementProvider } from './context/LogementContext';
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Fiche from "./pages/Fiche";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fiche/:id" element={<Fiche />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
