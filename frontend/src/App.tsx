import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import ButtonDropdownsExample from "./components/Searchbar";
function App() {
  return (
    <Container>
      <Navbar />
      <ButtonDropdownsExample />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserPage />} />
      </Routes>
    </Container>
  );
}

export default App;
