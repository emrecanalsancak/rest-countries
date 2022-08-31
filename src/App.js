import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <Routes>
        <Route path="rest-countries/details" element={<Details />}></Route>
        <Route path="/rest-countries" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
