function Input({name,type,value,onChange}){
    
    return (    
        <div className="inputBox">
            <input type= {type} className="inputData" required value = { value } onChange={ onChange } />
            <span>{ name }</span>
        </div>    
    )
}


export default Input;