import './App.scss';
import {Navbar} from './components/Navbar/index'
import { Cards } from './pages/Cards/Cards';
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
      <Features/>
      <Cards/>
      <Share/>
      <Sucess/>
      <Team/>
    </div>
  );
}

export default App;
