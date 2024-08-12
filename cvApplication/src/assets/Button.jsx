function Button({type,value,className,onClick}){
    return (
        <button className={className} type={type} onClick={onClick}> {value} </button>
    )
}

export default Button;