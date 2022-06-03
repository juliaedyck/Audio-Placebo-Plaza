import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () =>{
  return (
    <Router>
      <Wrapper>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>


        </Switch>
      </Wrapper>
    </Router>
  );
};

const Wrapper = styled.div``

export default App;
