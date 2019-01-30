import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Route, Link } from 'react-router-dom';
import '../utils/styles/login.css';
/* components */
import Input from '../components/TextInput';
import Button from '../components/Button';

import Register from './register';


export const LOGIN_USER = gql`
  mutation createUser( $name: String!, $pass: String!, $email: String ) {
    createUser(input: { name: $name, pass: $pass, email: $email }) {
      name
      pass
      email
    }
  }
`;


class Login extends Component {
  state = {
    argsLogin: {}
  }

  handleChange = (e, name) => {
    const argsLogin = this.state.argsLogin;
    argsLogin[name] = e.target.value;
    this.setState({ argsLogin });
  }

  render(){
    let argsLogin = this.state.argsLogin;

    return(
      <Query query={LOGIN_USER} variables={argsLogin} onError={() => {}}>
        {(addUser, result) =>{
          const { data, loading, error, called } = result;
          if (!called) {
            return(
              <div className="login">
                <Input
                  name="user"
                  label="User"
                  handleChange={this.handleChange}
                  /><br/>
                <Input
                  name="password"
                  label="Password"
                  handleChange={this.handleChange}
                  /><br/>
                <div className="content_button">
                  <Link to={`/register`}><Button name="Crear cuenta"/></Link>
                  <Button name="Iniciar sesion"/>
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


          }}
      </Query>

    );
  }
}

export default Login;
