import React from "react";
import Layout from "./Layaut/Layout";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
      <Routes>
        <Route path={"/"} element={<Layout/>}/>
      </Routes>
  );
}

export default App;
