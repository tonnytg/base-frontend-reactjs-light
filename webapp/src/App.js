import './App.css';

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
function App() {
  return (
    <>
        <div className="App">
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/blog" element={ <Blog /> } />
                <Route path="/about" element={ <About /> } />
            </Routes>
        </div>
    </>
  );
}

export default App;
