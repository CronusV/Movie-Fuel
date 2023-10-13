import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import ButtonDropdownsExample from "./components/Searchbar";
function App() {
  return (
    <Container>
      <Navbar />
      <ButtonDropdownsExample/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Container>
  );
}

export default App;
