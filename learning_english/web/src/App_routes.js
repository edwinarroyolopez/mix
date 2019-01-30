import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

/* routes */
import Home from './views/home';
import Login from './views/login';
import Topics from './views/topics';

class App extends Component {
  state = { initialRouteName: null };


  xxfunctionxx = (token) => {
    console.log(token);
    let user;
    switch (token) {
      case 1:
          user = {uid:'as12'};
        break;
      default:
    }
    return user;
  }

  initialRouter = async () => {
    try {
      // await AsyncStorage.removeItem("user");
      // let user = await AsyncStorage.getItem("user");
      let user = await this.xxfunctionxx(1);

      console.log('user: ', user);

      if (user.uid) {
        return "Home";
      } else {
        await 'getToken()';
        return "Login";
      }
    } catch (error) {
      await 'getToken()';
      return "Login";
    }
  };


  componentDidMount = async () => {
    const initialRouteName = await this.initialRouter();
    console.log('initialRouteName: ',initialRouteName);
    this.setState({ initialRouteName });
  };

  render(){
      return(
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/topics" component={Topics} />
          </div>
        </Router>
      );
  }
}


const Header = () => (
  <ul className="nav">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
  </ul>
);

export default App;
