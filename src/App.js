import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import About from './components/About';
import Techs from './components/Techs';
import Menu from './components/Menu';

function App() {
  return (
    <div>
    <Menu />
    <Main />
    <About />
    <Techs />
  </div>
  );
}

export default App;
