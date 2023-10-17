import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import SearchPagePage from "./pages/SearchPage";
const props = {text:"barbie",language:"en-US",page:1}
function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/Search" element={<SearchPagePage />}/>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Container>
  );
}

export default App;
