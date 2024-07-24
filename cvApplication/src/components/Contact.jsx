import { useState } from "react";
import "../styles/contact.css";


 function Contact(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return(
        <div className="contact">
            <div className="contactHeaders">
                <h1 className="contactTitle"> Contact</h1>
                <p className="contactSubtitle">Please input your name, email and phone number.</p>
            </div>
            
           <form className="contactForm">
                <div className="fullName">
                    <Input name = "First name" type = "text" value={ firstName } onChange = {(e)=> setFirstName(e.target.value)} />
                    <Input name = "Last name" type = "text" value={ lastName } onChange = {(e)=> setLastName(e.target.value)} />
                </div>
                <div className="email">
                    <Input name = "Email" type = "email" value={ email } onChange = {(e)=> setEmail(e.target.value)} />
                </div>

                <div className="phone">
                    <Input name= "Phone number" type = "tel" value={ phone } onChange = {(e)=> setPhone(e.target.value)} />
                </div>
                <div className="contactBtn">
                    <Button type = "submit"/>
                </div>
                   
           </form>
            
        </div>
    )
}


function Input({name,type,value,onChange}){
    
    return (    
        <div className="inputBox">
            <input type= {type} className="inputData" required value = { value } onChange={ onChange } />
            <span>{ name }</span>
        </div>    
    )
}

function Button({type}){
    return (
        <button className="button" type={type}>Continue</button>
    )
}


export default Contact;