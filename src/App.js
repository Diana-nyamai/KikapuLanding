import './App.scss';
import {Navbar} from './components/Navbar/index'
import { Cards } from './pages/Cards/Cards';
import { Features } from './pages/Features';
import { Home } from './pages/Home/Home';
import { Share } from './pages/shareJourney/Share';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Features/>
      <Cards/>
      <Share/>
    </div>
  );
}

export default App;
