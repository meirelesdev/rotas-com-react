import { http, setToken } from '../../services/login'
import { useState } from "react"
import { useHistory } from 'react-router-dom'

const Login = () =>{
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    // const [ errors, setErrors ] = useState({email:"",password:"" })
    const history = useHistory()

    const handleLogin = async () => {
        if(!email) return alert('Digite um email valido.')
        if(!password) return alert('Senha invalida.')
        const result = await http({email, password}, 'sessions')
        if(result.error) return alert(result.error)
        const user = result.user
        delete user.password
        user.token = result.token
        setToken(user)
        history.push('/painel')
    }
    return (
        <div>
            <h1>Fazer login</h1>
            {/* {!!errors.email && (
                <div className="alert">Email Invalido.</div>
            )}
            {!!errors.password && (
                <div className="alert">Senha.</div>
            )} */}
            <fieldset>
                <legend>Email</legend>
                <input type="email" onChange={e=> setEmail(e.target.value)} placeholder="Digite seu e-mail"/>
            </fieldset>
            <fieldset>
                <legend>Senha</legend>
                <input type="password" onChange={e=> setPassword(e.target.value)} placeholder="Digite seu senha"/>
            </fieldset>
            <button onClick={handleLogin}>Logar</button>
            <button onClick={()=> history.push('/singup')}>Não tenho cadastro?</button>
        </div>
    )
}

export default Login