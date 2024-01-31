import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Whishlist from "./Pages/Whishlist";
import "./bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Whishlist" element={<Whishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
