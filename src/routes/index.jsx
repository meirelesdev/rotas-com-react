import {BrowserRouter as Router,  Switch, Route } from 'react-router-dom'
import About from '../pages/about'
import Home from '../pages/home'
import Login from '../pages/singin'
import Singup from '../pages/singup'
import Panel from '../pages/panel'
import PrivateRoute from './PrivateRoute'
import { getToken } from '../services/login'

const Routes = ()=>{
    const isAuthenticated = getToken()
    console.log(isAuthenticated)
    return(
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/singup" component={Singup} />
                <PrivateRoute exact path="/" isAuthenticated={isAuthenticated} component={Home} />
                <PrivateRoute path="/painel" isAuthenticated={isAuthenticated} component={Panel} />
                <PrivateRoute path="/sobre"  isAuthenticated={isAuthenticated} component={About} />
                <Route path="*" component={()=><h1>Pagina não encontrada</h1>} />
            </Switch>
        </Router>
    )
}

export default Routes