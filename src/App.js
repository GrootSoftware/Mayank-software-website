import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav1 from './Nav1/Nav1';
import Nav2 from './Nav2/Nav2';
import Banner from './Home/Banner';
import Services from './Home/Services/Services';
import Web from './WEB-D/Web';
import AppD from './APP/AppD.js';
import Software from './SOFTWARE/Software';


function App() {
  return (
    <div>
    {/* <Home/> */}

    <Nav1/>
    <Nav2/>
    <Banner/>
    <Services/>
  {/* <Web/> */}
  {/* <AppD/> */}
  {/* <Software/> */}
    </div>
  );
}

export default App;
