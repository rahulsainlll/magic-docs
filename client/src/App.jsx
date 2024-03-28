// import { Button } from "@/components/ui/button";

// export default function Home() {
//   return (
//     <div>
//       <Button>Click me</Button>
//     </div>
//   );
// }


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Signup from "./pagess/Signup";
// import Signin from "./pagess/Signin";
import "./App.css";

import axios from "axios";
import { Toaster } from "react-hot-toast";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;