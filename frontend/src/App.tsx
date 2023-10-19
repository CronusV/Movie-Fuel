import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import PostTest from "./pages/PostTest";
import ButtonDropdownsExample from "./components/Searchbar";

import SearchPagePage from "./pages/SearchPage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
const props = {text:"barbie",language:"en-US",page:1}


function App() {
  return (
    <Container>
      <Navbar />


      <Routes>
        <Route path="/Search" element={<SearchPagePage />}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/postTest" element={<PostTest/>} />
        {/* <Route path="/profile" element={<UserPage />} /> */}
        {/* <Route path="/guest-profile/:Otherusername" element={<GuestPage />} /> */}
        {/* <Route path="/post" element={<PostPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Container>
  );
}

export default App;
