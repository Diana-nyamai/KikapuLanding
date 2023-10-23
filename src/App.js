import './App.scss';
import { Footer } from './components/Footer/Footer';
import {Navbar} from './components/Navbar/index'
import { About } from './pages/About';
import { Features } from './pages/Features';
import { Home } from './pages/Home/Home';
import { Sucess } from './pages/Success/Sucess';
import { Team } from './pages/Team/index';
import { Share } from './pages/shareJourney/Share';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Features/>
      <Share/>
      <Sucess/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
