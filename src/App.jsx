import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu/Menu';
import { Usuarios } from './pages/Usuarios/Usuarios';
import {Blog} from "./pages/Blog/Blog"
import { Contato } from './pages/Contato/Contato';
import { Home } from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/usuarios" element={<Usuarios/>}/>
        </Routes>
      </BrowserRouter>   
      </div>
  );
}

export default App;
