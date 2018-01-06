import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';


const Routes =()=>(
<BrowserRouter>
<Switch>
<Route exact path='/' component={Welcome}/>
<Route exact path='/Welcome' component={Welcome}/>
<Route  path='/Login' component={Login}/>
<Route  path='/SignUp' component={SignUp}/>
</Switch>
</BrowserRouter>
);



export default Routes;