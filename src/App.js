import './App.scss';
import {Navbar} from './components/Navbar/index'
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
