import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/chat/:id" element={<ChatWindow />} />
      </Routes>
    </Router>
  );
}

export default App;
