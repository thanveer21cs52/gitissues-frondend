import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateIssue from "./pages/CreateIssue";
import ViewIssue from "./pages/ViewIssue";
import EditIssue from "./pages/EditIssue";
import Login from "./pages/Login";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateIssue />} />
        <Route path="/view/:number" element={<ViewIssue />} />
        <Route path="/edit/:number" element={<EditIssue />} />
         <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
