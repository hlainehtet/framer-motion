import { Route, Routes } from "react-router";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<div>home</div>} />
      <Route path="/simple" element={<div>simple</div>} />
    </Routes>
  );
}
