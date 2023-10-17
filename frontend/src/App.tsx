import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import ButtonDropdownsExample from "./components/Searchbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Container>
      <Navbar />
      <ButtonDropdownsExample/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Container>
  );
}

export default App;
