import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Top } from "./components/Top";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Top}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
