import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Index";

export default function Index() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}
