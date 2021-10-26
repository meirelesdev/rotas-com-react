import { http } from '../../services/functions'
import { useState } from "react"
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import InputField from '../../components/InputField'

const Singup = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" })
    const [errors, setErrors] = useState({ name: "", email: "", password: "" })
    const [ msg, setMsg ] = useState("")
    const [ loading, setLoading ] = useState(false)
    const history = useHistory()

    const handleInputChange = (e)=>{
        const { name, value } = e.target
        setUser({...user, [name]: value})
        setErrors({...errors, [name]: false})
        if(value.length === 0) setErrors({...errors, [name]: true})
    }
    const handleSingup = async () => {
        setLoading(true)
        console.log(errors)
        if (!user.name) {
            setErrors({...errors, name: true})
            setLoading(false)
            return  
        }
        if (!user.email) {
            setErrors({...errors, email: true})
            setLoading(false)
            return  
        }
        if (!user.password) {
            setErrors({...errors, password: true})
            setLoading(false)
            return  
        }
        const result = await http(user, 'users')
        if (result.error) {
            alert(result.error)
            setLoading(false)
            return  
        }
        if (result.message) {
            setLoading(false)
            setMsg(result.message)
            return
        }
        setLoading(false)
        history.push('/login')
    }
    return (
        <div>
            {loading && <div className="loading"><p>Aguarde...</p></div> }
            <h1>Cadastro de Usuario</h1>
            <div className="form-login">
                {msg && <div className="msg"><p>{msg}</p></div>}
                <InputField
                    error={errors.name}
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome..."
                    title="Nome"
                />
                <InputField
                    error={errors.email}
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    placeholder="Digite seu e-mail..."
                    title="E-mail"
                />
                <InputField
                    error={errors.password}
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                    placeholder="Digite uma senha..."
                    title="Senha"
                />
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