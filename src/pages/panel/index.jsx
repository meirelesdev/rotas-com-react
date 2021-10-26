import { logout } from "../../services/login"
import { useHistory } from 'react-router-dom'

const Panel = () =>{
    const history = useHistory()
    const logoutUser = ()=>{
        logout()
        history.push('/')
    }
    return (
        <div>
            <button onClick={logoutUser}>Logout</button>
            <h1>Você esta Logado</h1>
        </div>
    )
}

export default Panel