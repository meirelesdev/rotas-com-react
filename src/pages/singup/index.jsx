import { http } from '../../services/login'
import { useState } from "react"
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const Singup = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" })
    const [errors, setErrors] = useState({ name: false, email: false, password: false })
    const [ msg, setMsg ] = useState("")
    const [ loading, setLoagin ] = useState(false)
    const history = useHistory()

    const handleInputChange = (e)=>{
        const { name, value } = e.target
        setUser({...user, [name]: value})
        setErrors({...errors, [name]: false})
        if(value.length === 0) setErrors({...errors, [name]: true})
    }
    const handleSingup = async () => {
        setLoagin(true)
        if (errors.name) {
            setLoagin(false)
            return  
        }
        if (errors.email) {
            setLoagin(false)
            return  
        }
        if (errors.password) {
            setLoagin(false)
            return  
        }
        const result = await http(user, 'users')
        if (result.error) {
            alert(result.error)
            setLoagin(false)
            return  
        }
        if (result.message) {
            setLoagin(false)
            setMsg(result.message)
            return
        }
        history.push('/login')
    }
    return (
        <div>
            {loading && <div className="loading"><p>Aguarde...</p></div> }
            <h1>Cadastro de Usuario</h1>
            <div className="form-login">
            {msg && <div className="msg"><p>{msg}</p></div>}     
            <fieldset className={errors.name? "error": ""}>
                    <legend>Usuario</legend>
                    <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Digite seu nome" />
                </fieldset>
                <fieldset className={errors.email? "error": ""}>
                    <legend>Email</legend>
                    <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Digite seu e-mail" />
                </fieldset>
                <fieldset className={errors.password? "error": ""}>
                    <legend>Senha</legend>
                    <input type="password" name="password" value={user.password} onChange={handleInputChange} placeholder="Digite seu senha" />
                </fieldset>
                <div className="buttons">
                    <button onClick={handleSingup}>Cadastrar</button>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Singup