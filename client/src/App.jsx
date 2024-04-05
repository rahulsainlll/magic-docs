import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

import axios from "axios";
import { Toaster } from "react-hot-toast";
import Backend from "./pages/Backend";
import Docs from "./pages/Docs";
import DocPage from "./pages/DocPage";

// Axios
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/:slug" element={DocPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
