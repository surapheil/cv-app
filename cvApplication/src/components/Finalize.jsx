import '../styles/contact.css';
import '../styles/Education.css';
import '../styles/Experiance.css';
import Button from "../assets/Button";
import '../styles/yearAndMonthSelection.css';
import { useState } from 'react';

function Finalize({onSummaryContinueClick,onFinalizeContinueClick}){
    const [selectedSection,setSelectedSection] = useState([]);

    const handleCheckBox = (event)=>{
        const {name,checked} = event.target;
        if(checked){
            setSelectedSection([...selectedSection,name]);
        }
        else{
            setSelectedSection(selectedSection.filter(section => section !== name));
        }
    };

    const handleContinueClick = () =>{
        onFinalizeContinueClick(selectedSection);
    };
  
    return(
        <div className="finalize contact">
            <div className='contactHeaders'>
                <h1 className='contactTitle'> Want to add any additional sections? </h1>
            </div>
            <form className="contactForm">
                <div className='experianceCheckBox'>
                    <input name="Languages"  type="checkbox" onChange={handleCheckBox} />
                    <label >Languages</label>
                </div>
                <div className='experianceCheckBox'>
                    <input name="Volunteer" type="checkbox" onChange={handleCheckBox}/>
                    <label >Volunteer Experience</label>
                </div>
                <div className='experianceCheckBox'>
                    <input  name="Awards" type="checkbox" onChange={handleCheckBox} />
                    <label >Awards</label>
                </div>
                <div className='experianceCheckBox'>
                    <input name="Publications" type="checkbox" onChange={handleCheckBox} />
                    <label >Publications</label>
                </div>
                <div className='experianceButton'>
                    <Button name ="Back" value = "Back" className="backButton" onClick={onSummaryContinueClick} type="button"/>
                    <Button name="Continue" value="Continue" className="button" onClick={handleContinueClick} type="button"/>
                </div>                
            </form>           
        </div>
    )
}
export default Finalize;