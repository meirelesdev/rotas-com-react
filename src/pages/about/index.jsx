import { useHistory, useParams, useLocation } from 'react-router-dom'

const About = ()=>{
    const history = useHistory()
    // const { offset, limit } = useParams()
    // const location = useLocation()

    return (
        <div>
            <h1>About</h1>
            <button type="button" onClick={()=> history.push('/')}>Ir para Home</button>
        </div>
    )
}
export default About