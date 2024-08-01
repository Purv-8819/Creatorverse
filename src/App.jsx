import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ViewCreator from "./pages/ViewCreator";
import ShowCreators from "./pages/ShowCreators";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";



function App(){
    return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ShowCreators />} />
      <Route path="/edit" element={<EditCreator />} />
      <Route path="/add" element={<AddCreator />} />
      <Route path="/view" element={<ViewCreator />} />
    </Routes>
    </BrowserRouter>
    );
}

export default App;