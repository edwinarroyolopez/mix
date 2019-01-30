import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';
import '../utils/styles/login.css';
/* components */
import Input from '../components/TextInput';
import Button from '../components/Button';


import {
  LOGIN_USER
} from '../queries';


/*
export const LOGIN_USER = gql`
  mutation Login($username: String!, $pass: String!) {
		Login:Login(username: $username, pass:$pass){
      name
    	username
      pass
      email
  }
}
`; */

export default  class Login extends Component {
  state = {
    argsLogin: {}
  };
  handleChange = (e, name) => {
    const argsLogin = this.state.argsLogin;
    argsLogin[name] = e.target.value;
    this.setState({ argsLogin });
  }

  render(){
    let argsLogin = this.state.argsLogin;

    return(
      <div className="login">
        <Mutation mutation={LOGIN_USER} variables={ argsLogin } onError={() => {}}>

            {(loginUser, result) => {
              const { data, loading, error, called } = result;

              console.log('argsLogin',argsLogin);
              console.log('data',data);

              if(!called){
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
                      <Button name="Iniciar sesion" onClick={loginUser}/>
                    </div>
                  </div>
                );
              }
              if (loading) {
                return <div>LOADING</div>;
              }
              if (error) {
                return <div>ERROR</div>;
              }

              const { Login } = data;
              if(Login){
                  const { username, name } = Login;
                  return <div>{`Logged ${username} with name ${name}`}</div>;
              } else {
                return <div>{`Error: Credenciales incorrectas`}</div>;
              }
            }}
        </Mutation>
      </div>
    );
  }
}
