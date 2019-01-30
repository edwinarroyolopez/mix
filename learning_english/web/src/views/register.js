import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import '../utils/styles/register.css';
/* components */
import Input from '../components/TextInput';
import Button from '../components/Button';

export const ADD_USER = gql`
  mutation createUser( $name: String!, $username: String!, $pass: String!, $email: String ) {
    createUser(input: { name: $name,  username: $username, pass: $pass, email: $email }) {
      name
      username
      pass
      email
    }
  }
`;

export default  class Register extends Component {
  state = {
    argsRegister: {}
  };
  handleChange = (e, name) => {
    const argsRegister = this.state.argsRegister;
    argsRegister[name] = e.target.value;
    this.setState({ argsRegister });
  };

  render() {
    let argsRegister = this.state.argsRegister;

    return (
      <div className="register">
        <h3>Registrar</h3>
        <Mutation mutation={ADD_USER} variables={ argsRegister } onError={() => {}}>
          {(addUser, result) => {
            const { data, loading, error, called } = result;
              console.log('argsRegister: ',argsRegister);
            if (!called) {
              return(
                <div className="register">
                  <Input
                    name="name"
                    label="Nombre Completo"
                    handleChange={this.handleChange}
                    /><br/>
                    <Input
                      name="username"
                      label="Usuario"
                      handleChange={this.handleChange}
                      /><br/>
                  <Input
                    name="pass"
                    label="Nueva Contraseña"
                    handleChange={this.handleChange}
                  /><br/>
                  <Input
                    name="email"
                    label="Email"
                    handleChange={this.handleChange}
                    /><br/>
                  <div className="content_button">
                    <Button name="Crear cuenta" onClick={addUser}/>
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

            const { createUser } = data;

            console.log('data',data);

            if (createUser) {
              const { name } = createUser;

              return <div>{`Created ${name} with id `}</div>;
            } else {
              return null;
            }
          }}
        </Mutation>
    </div>
    );
  }
}
