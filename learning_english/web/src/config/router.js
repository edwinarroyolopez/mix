import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/* routes */
import Home from '../views/home';
import Login from '../views/login';
import Register from './views/register';
import Topics from '../views/topics';

const Router = ({ initialRouteName }) => {
 return(
   <Router>
     <div>
       <Header />
       <Route exact path="/" component={initialRouteName} />
       <Route path="/register" component={Register} />
     </div>
   </Router>
 );
}


const Header = () => (
  <ul className="nav">

  </ul>
);

export default Router;
