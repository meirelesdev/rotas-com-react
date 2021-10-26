import { http, setToken } from '../../services/functions'
import { useState } from "react"
import { useHistory } from 'react-router-dom'
import './style.css'
import InputField from '../../components/InputField'

const Login = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({ email: "", password: "" })
    const [msg, setMsg] = useState("")
    const history = useHistory()

    const handleInputChange = (e) => {
        setMsg("")
        const { name, value } = e.target
        if (value.length === 0) {
            setErrors({ ...errors, [name]: true })
        }
        setLoginData({ ...loginData, [name]: value })
        setErrors({ ...errors, [name]: false })
    }

    const handleLogin = async () => {
        setLoading(true)
        if (!loginData.email) {
            setErrors({ ...errors, email: true })
            setLoading(false)
            return
        }
        if (!loginData.password) {
            setErrors({ ...errors, password: true })
            setLoading(false)
            return
        }
        const result = await http(loginData, 'sessions')
        if (result.error) {
            setLoading(false)
            setMsg(result.error)
            return
        }
        const user = result.user
        user.token = result.token
        setToken(user)
        setLoading(false)
        history.push('/painel')
    }
    return (
        <div>
            {loading && <div className="loading"><p>Aguarde...</p></div>}
            <h1>Fazer login</h1>
            <div className="form-login">
                {msg && <div className="msg"><p>{msg}</p></div>}
                <InputField
                    error={errors.email}
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleInputChange}
                    placeholder="Digite seu e-mail..."
                    title="E-mail"
                />
                <InputField
                    error={errors.password}
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleInputChange}
                    placeholder="Digite seu senha..."
                    title="Senha"
                />
                <div className="buttons">
                    <button onClick={handleLogin}>Logar</button>
                    <button onClick={() => history.push('/singup')}>Não tenho cadastro?</button>
                </div>
            </div>
        </div>
    )
}

export default Login