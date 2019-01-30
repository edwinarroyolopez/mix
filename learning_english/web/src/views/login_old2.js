import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';
import '../utils/styles/login.css';
/* components */
import Input from '../components/TextInput';
import Button from '../components/Button';

import Register from './register';

export const LOGIN_USER = gql`
  query getLogin($username: String!, $pass: String!) {
		Login:Login(username: $username, pass:$pass){
      name
    	username
      pass
      email
  }
}
`;


export default  class Login extends Component {
  state = {
    argsLogin: {username: "",
      pass: ""}
  }

  handleChange = (e, name) => {
    const argsLogin = this.state.argsLogin;
    argsLogin[name] = e.target.value;
    this.setState({ argsLogin });
    console.log(argsLogin);
  }

  handleClick = () =>{
    console.log('onClick');
  }

  render(){
    const argsLogin = this.state.argsLogin;

    return(

        <Query query={LOGIN_USER} variables={ argsLogin } skip={!argsLogin} onError={() => {}}>
          {( { loading, error, data, refetch } ) => {

              console.log(data);

            if (loading) {
              return <div>LOADING</div>;
            }
            if (error) {
              return <div>ERROR</div>;
            }

            return(
              <div className="login">
                <Input
                  name="username"
                  label="User"
                  handleChange={this.handleChange}
                  /><br/>
                <Input
                  name="pass"
                  label="Password"
                  handleChange={this.handleChange}
                  /><br/>
                <div className="content_button">
                  <Link to={`/register`}><Button name="Crear cuenta"/></Link>
                  <Button name="Iniciar sesion" onClick={() => refetch() }/>
                </div>
              </div>
            );



          }}
        </Query>


    );
  }
}

//argsLogin={argsLogin}





/**/
