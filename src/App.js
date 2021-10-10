import { createGlobalStyle } from 'styled-components';
import './App.css';
import { Route, HashRouter as Router } from 'react-router-dom';
import Conversations from './components/Conversations';

const Global = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-family: sans-serif;
  }
  a{
    text-decoration:none;
  }
`;

function App() {
  return (
    <div className="App">
      <Global />
      <Router>
        <Route path="/">
          <Conversations />
        </Route>
      </Router>
    </div>
  );
}

export default App;
