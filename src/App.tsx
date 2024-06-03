import { Route, Routes } from "react-router";
import {
  HomePage,
  StartUsingAnimatePage,
  StartUsingInitialPage,
} from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/start-using-animate" element={<StartUsingAnimatePage />} />
      <Route path="/start-using-initial" element={<StartUsingInitialPage />} />
    </Routes>
  );
}
