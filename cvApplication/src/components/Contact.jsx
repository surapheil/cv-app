import { useState } from "react";
import "../styles/contact.css";
import Country from "../assets/Country";


function Contact({contact,setContact,onContinueClick}){
   
    const handleChange = (prop,value)=>{
        const currentContact = {...contact};
       currentContact[prop] = value;
       setContact(currentContact);
    }

    console.log(contact);

    const handleContinueClick = (e) =>{
        e.preventDefault();
        onContinueClick();
    }

    return(
        <div className="contact">
            <div className="contactHeaders">
                <h1 className="contactTitle"> Contact</h1>
                <p className="contactSubtitle">Please input your name, email and phone number.</p>
            </div>
            
           <form className="contactForm" onSubmit={handleContinueClick}>
                <div className="fullName">
                    <Input name = "First name" type = "text" value={ contact.firstName } onChange = {(e)=> handleChange('firstName',e.target.value)} />
                    <Input name = "Last name" type = "text" value={ contact.lastName } onChange = {(e)=> handleChange('lastName',e.target.value)} />
                </div>

                <div className="phone">
                    <Input name= "Phone number" type = "tel" value={ contact.phone } onChange = {(e)=> handleChange('phone',e.target.value)} />
                </div>

                <div className="countrySelection fullName">
                    <Country name ="Country" value={contact.country} onChange={(selectedOption)=>handleChange('country',selectedOption.label)}/>
                    <Input name="City" type="Text" value={contact.city} onChange={(e)=> handleChange ('city',e.target.value)} />
                </div>
                <div className="email">
                    <Input name = "Email" type = "email" value={ contact.email } onChange = {(e)=> handleChange("email",e.target.value)} />
                </div>
                <div className="linkedin">
                    <Input name = "Job Title" type = "text" value={ contact.jobTitle } onChange = {(e)=> handleChange('jobTitle',e.target.value)} />
                </div>

                <div className="contactBtn">
                    <Button type = "submit" />
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