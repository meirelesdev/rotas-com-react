import { http } from '../../services/login'
import { useState } from "react"

const Singup = () =>{
    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    const handleSingup = async () => {
        if(!name) return alert('Usuario invalido.')
        if(!email) return alert('Digite um email valido.')
        if(!password) return alert('Senha invalida.')
        const result = await http({name, email, password}, 'users')
        if(result.error) return alert(result.error)
        console.log(result)
    }
    return (
        <div>
            <h1>Cadastro de Usuario</h1>
            <fieldset>
                <legend>Usuario</legend>
                <input type="text" onChange={e=> setName(e.target.value)} placeholder="Digite seu e-mail"/>
            </fieldset>
            <fieldset>
                <legend>Email</legend>
                <input type="email" onChange={e=> setEmail(e.target.value)} placeholder="Digite seu e-mail"/>
            </fieldset>
            <fieldset>
                <legend>Senha</legend>
                <input type="password" onChange={e=> setPassword(e.target.value)} placeholder="Digite seu senha"/>
            </fieldset>
            <button onClick={handleSingup}>Cadastrar</button>
        </div>
    )
}

export default Singup