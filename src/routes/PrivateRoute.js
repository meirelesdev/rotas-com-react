import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({component: Component, isAuthenticated, ...rest})=>{
    const { token } = isAuthenticated
    return (
            <Route 
            {...rest}
            render={props => (
                token
                ?
                <Component {...props} /> 
                :
                <Redirect to="/login" />
            )}
            />
    )
}
export default PrivateRoute