import React from "react";
import "./App.css";
import Home from "./SCP_HOME";
import Scp_002 from "./SCP_002";
import Scp_003 from "./SCP_003";
import Scp_004 from "./SCP_004";
import Scp_005 from "./SCP_005";
import Scp_006 from "./SCP_006";
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
          <Route path="/SCP_002" element={<Scp_002 />} />
          <Route path="/SCP_003" element={<Scp_003 />} />
          <Route path="/SCP_004" element={<Scp_004 />} />
          <Route path="/SCP_005" element={<Scp_005 />} />
          <Route path="/SCP_006" element={<Scp_006 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
