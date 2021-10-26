import { useEffect, useState } from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'

const Home = ()=>{
    const [ count, setCount ] = useState(0)
    const history = useHistory()
    useEffect(()=>{
        const load = ()=>{
            if(count === 10) history.replace('/sobre')
        }
        load()
    }, [history, count])
    return (
        <div>
            <h1>Home</h1>
            <button type="button" onClick={()=> history.push('/sobre')}>Ir para Sobre</button>
            <button type="button" onClick={()=> history.push('/painel')}>Ir para o Painel</button>
        </div>
    )
}
export default Home