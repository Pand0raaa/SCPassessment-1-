import React from "react";
import "./App.css";
import Home from "./scp_Home";
import Scp_002 from "./Scp_002";
import Scp_003 from "./Scp_003";
import Scp_004 from "./Scp_004";
import Scp_005 from "./Scp_005";
import Scp_006 from "./Scp_006";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <foundation />

        <Routes>
          <Route path="/scp_Home" element={<Home />} />
          <Route path="/Scp_002" element={<Scp_002 />} />
          <Route path="/Scp_003" element={<Scp_003 />} />
          <Route path="/Scp_004" element={<Scp_004 />} />
          <Route path="/Scp_005" element={<Scp_005 />} />
          <Route path="/Scp_006" element={<Scp_006 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
