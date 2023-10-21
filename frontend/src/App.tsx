import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import PostTest from "./pages/PostTest";
import ButtonDropdownsExample from "./components/Searchbar";
import SearchPagePage from "./pages/SearchPage";
import GuestPage from "./components/guestProfile/GuestProfileView";
import DiscoverPage from "./pages/DiscoverPage";
import MoviePage from "./pages/MoviePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Review } from "./types/Review";
import Reviews from "./pages/Reviews";
// const props = {text:"barbie",language:"en-US",page:1}

const testPost: Review = {
  PostID: "7e67ace3-1206-4ee2-b7d8-55c81da9ae8e",
  Author: "alex",
  Comment: "This is what I think about the movie",
  Title: "Its alright",
  DateTime: "2023-10-12T03:25:46.169Z",
  Likes: 10,
  Movie: 123,
}

//import PostPage from "./components/postPage/Post";

const props = { text: "barbie", language: "en-US", page: 1 };

function App() {
  return (
    <Container>
      <Navbar />

      <Routes>
        <Route path="/movies/:tmdb_id" element={<MoviePage/>}/>
        <Route path="/discover/:ids" element={<DiscoverPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Search/:searchtext" element={<SearchPagePage />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/guest-profile/:Otherusername" element={<GuestPage />} />

        <Route path="/postTest" element={<PostTest {...testPost}/>} />
        <Route path="/Reviews" element={<Reviews />} />
        {/* // <Route path="/reviewHome" element={<ReviewHome/>} /> */}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
      </Routes>
    </Container>
  );
}

export default App;
