const InputField = (props) => {
    return (
        <fieldset className={props.error ? "error" : ""}>
            <legend>{props.title}</legend>
            <input {...props} />
        </fieldset>
    )
}
export default InputField