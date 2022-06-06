import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import Login from "./components/Login";
import About from "./components/About";
import MyForm from "./components/testForm";

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
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Form">
            {/* <MyForm/> */}
            <Form />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>

        </Switch>
      </Wrapper>
    </Router>
  );
};

const Wrapper = styled.div``

export default App;
