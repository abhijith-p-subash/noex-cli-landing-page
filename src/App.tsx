import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to={"/"} />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
