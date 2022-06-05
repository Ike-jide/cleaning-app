import NavBar from './componets/NavBar';
import './App.css';
import HomePage from './componets/HomePage';
import AboutUs from './componets/AboutUs';
import Services from './componets/Services';
import Testimonies from './componets/Testimonies';
import Works from './componets/Works';


function App() {
  return(
    <div>
  <NavBar />
  <HomePage />
  <AboutUs />
  <Services />
  <Testimonies />
    <Works />
  </div>
  
  )
}

export default App;
