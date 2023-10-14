import './App.scss';
import {Navbar} from './components/Navbar/index'
import { Features } from './pages/Features';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Features/>
    </div>
  );
}

export default App;
