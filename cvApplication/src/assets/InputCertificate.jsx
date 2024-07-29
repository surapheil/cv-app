import deleteIcon from '../assets/images/delete_16596354.png'
import '../styles/inputCerti.css'

function Input({name,type,value,onChange,onClick}){
    
    return (    
        <div className="inputBox">
            <input type= {type} className="inputData" required value = { value } onChange={ onChange } />
            <span className='nameSpan'>{ name }</span>
            <a className='deleteIcon'onClick={onClick} >
                <img src={deleteIcon} alt="delete icon"  className='dltIcn'/>
            </a>
        </div>    
    )
}


export default Input;