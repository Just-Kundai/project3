import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Title from "./components/Title";
import Blog from "./pages/HomePage/Blog";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Reset from "./components/Reset";
import OnePost from "./components/OnePost";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import About from "./pages/AboutPage/About";
import Create from "./components/Create";
import Main from "./pages/HomePage/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>

    <div className="app">
    <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
           <Main />

          </Route>
          <Route exact path="/AboutMe">
            <About />
          </Route>
          <Route exact path="/AllPosts">
            <Blog />
          </Route>
          <Route exact path="/posts/:id">
            <OnePost />
          </Route>
          <Route exact path="/create">
            < Create />
          </Route>
          <Route exact path="/login">
            < LogIn />
          </Route>

          <Route exact path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
      <Footer />

    </div>
  </Router>
);
}


export default App;
