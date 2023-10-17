import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import PostTest from "./pages/PostTest";

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/postTest" element={<PostTest/>} />
      </Routes>
    </Container>
  );
}

export default App;
