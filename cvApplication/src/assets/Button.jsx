function Button({type,value,className}){
    return (
        <button className={className} type={type}> {value} </button>
    )
}

export default Button;