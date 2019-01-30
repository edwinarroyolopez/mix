import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './utils/styles/components.css';
import './App.css';

/* routes */
import Router from './config/router';


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
      let user = await this.xxfunctionxx(0);

      console.log('user: ', user);

      if (user.uid) {
        return Home;
      } else {
        await 'getToken()';
        return Login;
      }
    } catch (error) {
      await 'getToken()';
      return Login;
    }
  };

  componentDidMount = async () => {
    const initialRouteName = await this.initialRouter();
    console.log('initialRouteName: ',initialRouteName);
    this.setState({ initialRouteName });
  };

  render(){
      return(
        <Router />
      );
  }
}

export default App;
