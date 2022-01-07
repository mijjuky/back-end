// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header"
import Nav from "./components/layout/Nav"
import Footer from "./components/layout/Footer"
import WorldPages from "./pages/World";
import VoidPages from "./pages/void"
import UnetePages from "./pages/unete"
import GuardianasPages from "./pages/guardianas"
import EspiritusPages from "./pages/espiritus"

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<WorldPages />} />
        <Route path="/void" exact element={<VoidPages />} />
        <Route path="/unete" exact element={<UnetePages />} />
        <Route path="/guardianas" exact element={<GuardianasPages />} />
        <Route path="/espiritus" exact element={<EspiritusPages />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
