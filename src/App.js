import { createGlobalStyle } from "styled-components";
import "./App.css";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import LoginPage from "./components/LoginPage.jsx";

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
        <Route exact path="/">
          <Redirect to="/home/" />
        </Route>
        <Route exact path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Router>
    </div>
  );
}

export default App;
