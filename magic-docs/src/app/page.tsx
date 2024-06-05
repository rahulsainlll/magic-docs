import Home from "@/pages/home";
import { Suspense } from "react"; 
import Navbar from "@/pages/navbar";

export default function MainPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Navbar/> */}
        <Home />
      </Suspense>
    </div>
  );
}
 