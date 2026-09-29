import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './componentes/Nav';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Pedido from './pages/Pedido';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Pedido" element={<Pedido />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;