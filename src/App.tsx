import logo from './logo.svg';
import './App.css';
import "./styles/site.scss"
import StateHook from './components/StateHook/StateHook';
import SideEffectHook from './components/SideEffect/SideEffectHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>My Simple React Practice</div>
      </header>

      <div className="components">
        <StateHook />
        <SideEffectHook />
      </div>
    </div>
  );
}

export default App;
