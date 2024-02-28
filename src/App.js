import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Gallary from './Component/Gallary';
import Service from './Component/Service';
import Contact from './Component/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home></Home>}/>
        <Route path="/About" element={<About></About>}/>
        <Route path="/Gallary" element={<Gallary></Gallary>}/>
        <Route path="/Service" element={<Service></Service>}/>
        <Route path="/Contact" element={<Contact></Contact>}/>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
