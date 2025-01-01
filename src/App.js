import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from "./components/pages/Service";
import Listing from "./components/pages/Listing";
import Contact from "./components/pages/Contact";

function App() {
  return (
     <>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/service" element={<Service/>}></Route>
       <Route path="/listing" element={<Listing/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
