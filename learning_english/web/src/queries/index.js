import { gql } from 'apollo-boost';

const LOGIN_USER = gql`
  mutation Login($username: String!, $pass: String!) {
		Login:Login(username: $username, pass:$pass){
      name
    	username
      pass
      email
  }
}
`;


export {
  LOGIN_USER
}
