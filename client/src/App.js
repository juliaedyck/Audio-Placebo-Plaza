import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import Login from "./components/Login";
import About from "./components/About";
import Confirmation from "./components/Confirmation";
import Profile from "./components/Profile";
import NewUser from "./components/NewUser";
import GlobalStyles from "./components/GlobalStyles";


const App = () =>{
  return (
    <Router>
      <GlobalStyles/>
      <Wrapper>
        <Header />
        {/* <NavBar /> */}
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
          <Route path="/Confirmed/:_id">
            <Confirmation />
          </Route>
          <Route path="/profile/:profileId">
            <Profile />
          </Route>
          <Route path="/new-user">
            <NewUser />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
};

const Wrapper = styled.div``

export default App;
