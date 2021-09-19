import logo from './logo.svg';
import './App.css';
import StateHook from './components/StateHook';
import { Col, Row } from 'react-bootstrap';
import SideEffectHook from './components/SideEffectHook';

function App() {
  return (
    <div className="App">      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Row>
          <Col md={3}>
            <StateHook />
          </Col>
          <Col md={6}>
            <SideEffectHook />
          </Col>
        </Row>
        
      </header>
    </div>
  );
}

export default App;
