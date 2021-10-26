import InputField from "./Input"

const FormLogin = ()=>{
    return(
        <div>
            <InputField type="text" placeholder="Digite seu Email..." title="Email"/>
            <InputField type="password" placeholder="Digite sua Senha..." title="Senha"/>
        </div>
    )
}
export default FormLogin