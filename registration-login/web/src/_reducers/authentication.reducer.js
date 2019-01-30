import { userConstants } from '../_constants';

/* Verificar usuario
  let user = JSON.parse(localStorage.getItem('user'));
 */
let user = '';
const initialState = user ? { loggedIn: true, user }: {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: true,
        user: action.user
      };
    default:
      return state;
  }
}
