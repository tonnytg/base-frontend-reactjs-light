import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";

// Importando os novos componentes
import MyComponent from './components/MyComponent';
import SettingsComponent from './components/SettingsComponent';
import ModalComponent from './components/ModalComponent';
import SearchComponent from './components/SearchComponent';
import CounterComponent from './components/CounterComponent';
import ResponsiveComponent from './components/ResponsiveComponent';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/blog" element={ <Blog /> } />
          <Route path="/about" element={ <About /> } />

          {/* Adicionando novas rotas para os componentes criados */}
          <Route path="/fetch" element={ <MyComponent /> } />
          <Route path="/settings" element={ <SettingsComponent /> } />
          <Route path="/modal" element={ <ModalComponent /> } />
          <Route path="/search" element={ <SearchComponent /> } />
          <Route path="/counter" element={ <CounterComponent /> } />
          <Route path="/responsive" element={ <ResponsiveComponent /> } />
        </Routes>
      </div>
    </>
  );
}

export default App;
