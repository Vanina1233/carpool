import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Banner from "./components/Home/Banner";
import Footer from "./components/Home/Footer";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Banner />}>
            <Route path="/" element={<Footer />}>
              <Route exact path="/" element={<Home />} />
            </Route>
          </Route>
          <Route exact path="/Auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
