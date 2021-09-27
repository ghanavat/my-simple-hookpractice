import logo from './logo.svg';
import './App.css';
import "./styles/site.scss"
import StateHook from './components/StateHook/StateHook';
import SideEffectHook from './components/SideEffect/SideEffectHook';
import CallBack from './components/CallBack/CallBack';
import UseMemo from './components/UseMemo/UseMemo';
import UseRef from './components/UseRef/useRef';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>My Simple React Hooks Practice</div>
      </header>

      <div className="components">
        <StateHook />
        <SideEffectHook />
        <CallBack />
        <UseMemo />
      </div>
      <div className="components">
        <UseRef />
      </div>
    </div>
  );
}

export default App;
