import { Link, useHistory } from 'react-router-dom'
import { logout } from '../../services/login'

const Header = () => {
    const history = useHistory()
    const logoutUser = ()=>{
        logout()
        history.push('/login')
    }
    return (
        <header>
            <div>
                <h1>Sistema de Login</h1>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/painel">Painel</Link>
                <p onClick={logoutUser}>Logout</p>
            </nav>
        </header>
    )
}
export default Header