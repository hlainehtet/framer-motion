import { Route, Routes } from "react-router";
import {
  HomePage,
  StartUsingAnimatePage,
  StartUsingInitialPage,
  StartUsingTransition,
} from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/animate" element={<StartUsingAnimatePage />} />
      <Route path="/initial" element={<StartUsingInitialPage />} />
      <Route path="/transition" element={<StartUsingTransition />} />
    </Routes>
  );
}
