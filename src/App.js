
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import AddItems from "./Items/AddItems";
import EditItems from "./Items/EditItems";
import HomePage from "./Pages/HomePage";

const App = () => {
  
  return (
  <div>
    <Router>
       <Navbar/>
    
    <Routes> 
      <Route exact path="/" element={<Home />} />
      <Route exact path="/additems" element={<AddItems />} />
      <Route exact path="/getItems/:id" element={<EditItems/>} />
      <Route exact path="/homepage" element={<HomePage />} />
    </Routes>
    
    </Router>
   
  </div>
  )
}
export default App;