import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componenets/navbar";
import Home from "./pages/home/index.jsx";
import Favorites from "./pages/favorites/index.jsx";
import Details from "./pages/details/index.jsx";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recepie-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
