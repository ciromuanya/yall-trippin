import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Gallery from './components/Gallery';
import PlanTrip from './components/PlanTrip';
import PopularDestinations from './components/PopularDestinations';
import BottomNav from './components/BottomNav';



function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Gallery />
      <PlanTrip />
      <PopularDestinations />
      <BottomNav />
    </div>
  );
}

export default App;
