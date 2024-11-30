import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Layout from "./components/layout/Layout";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
