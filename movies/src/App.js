import logo from './logo.svg';
import './App.css';
import User from './components/user.jsx'
import { Route, Routes } from 'react-router-dom';
import Reviews from './components/reviews';
import Home from './components/Home';
import NavBar from './components/NavBar';
function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/profile" element={<User />} />

      </Routes>
    </>
  );
}

export default App;
