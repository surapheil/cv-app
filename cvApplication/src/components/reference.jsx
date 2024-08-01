import Input from '../assets/Input';
import Button from '../assets/Button';
import '../styles/contact.css';
import '../styles/Experiance.css'
import { useState } from 'react';
function Reference(){
    return(
        <div className="reference contact">
            <div className="contactHeaders">
                <h1 className="contactTitle referenceHeader">Any references?</h1>
                <p className="contactSubtitle refereceSubtitle">We recommend NOT including references, unless they were specifically requested in the job ad.</p>
            </div>
            <form className="referenceForm contactForm">
                <div className="refBtn experianceButton">
                    <Button className="backButton" type="submit" value="Yes"/>
                    <Button className="backButton" type="submit" value="Upon Request"/>
                    <Button className="backButton" type="submit" value="No"/>
                </div>

                <Addreference/>
            </form>
            
        </div>
        
    )

}



function Addreference(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [email,setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [relation, setRelation] = useState("");
    return(
        <div className="reference contact">
            <div className="contactHeaders">
                <h1 className='contactTitle'>Add Reference</h1>
            </div>
            <form className="referenceAddForm contactForm">
                <div className="refInput experianceDescription">
                    <Input type="text" value={firstName} name="First name" onChange={(e)=>setFirstName(e.target.value)}/>
                    <Input type="text" value={lastName} name="Last name" onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div className='refPosition'>
                    <Input type="text" name="Position title " value={position} onChange={(e)=>setPosition(e.target.value)}/>
                </div>
                <div className='refEmail'>
                    <Input type="text" name="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='company experianceDescription'>
                    <Input type="text" name="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <Input type="text" name="Company" value={company} onChange={(e)=>setCompany(e.target.value)}/>
                </div>
                <div className='relation'>
                    <Input type="text" name="Relationship to you" value={relation} onChange={(e)=>setRelation(e.target.value)}/>
                </div>

                <div className='experianceButton'>
                    <Button name ="Back" value = "Back" className="backButton" type="submit"/>
                    <Button name="Continue" value="Save" className="button" type="Submit"/>
                </div>

            </form>
        </div>
        
        
    )
}

export default Reference;