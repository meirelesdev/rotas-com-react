import {BrowserRouter as Router,  Switch, Route } from 'react-router-dom'
import About from '../pages/about'
import Home from '../pages/home'
import Login from '../pages/singin'
import Singup from '../pages/singup'
import Panel from '../pages/panel'
import PrivateRoute from './PrivateRoute'
import { getToken } from '../services/functions'

const Routes = ()=>{
    return(
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/singup" component={Singup} />
                <PrivateRoute exact path="/" isAuthenticated={getToken} component={Home} />
                <PrivateRoute path="/painel" isAuthenticated={getToken} component={Panel} />
                <PrivateRoute path="/sobre"  isAuthenticated={getToken} component={About} />
                <Route path="*" component={()=><h1>Pagina não encontrada</h1>} />
            </Switch>
        </Router>
    )
}

export default Routes