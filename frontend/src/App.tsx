import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ButtonDropdownsExample from "./components/Searchbar";

function App() {
  return (
    <>
      <Navbar />
      <ButtonDropdownsExample/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
