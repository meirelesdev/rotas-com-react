import './style.css'

const InputField = (props) => {
    return (
        <div className="inputField">
            <label>{props.title}</label>
            <input {...props}/>
        </div>
    )
}
export default InputField