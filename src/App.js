import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";
import PlanTrip from "./components/PlanTrip";
import PopularDestinations from "./components/PopularDestinations";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/plan-trip" element={<PlanTrip />} />
        <Route path="/popular-destinations" element={<PopularDestinations />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;
