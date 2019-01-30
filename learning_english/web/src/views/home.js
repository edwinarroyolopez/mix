import React, { Component } from 'react';


class Home extends Component {

  componentDidMount = () => {
    console.log('componentDidMount ... home');
  };


  render() {
    return(
      <div className="home" >Home ... ... file</div>
    );
  }
}

export default Home;
