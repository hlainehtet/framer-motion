import { Route, Routes } from "react-router";
import { HomePage, StartUsingAnimatePage } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/start-using-animate" element={<StartUsingAnimatePage />} />
    </Routes>
  );
}
