import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {BrowserRouter, Routes, Route } from "react-router-dom";
import ViewCreator from "./pages/ViewCreator";
import ShowCreators from "./pages/ShowCreators";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ShowCreators />} />
      <Route path="/edit" element={<EditCreator />} />
      <Route path="/add" element={<AddCreator />} />
      <Route path="/view" element={<ViewCreator />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
