import { useState } from "react";
import Input from "../assets/InputCertificate";
import Button from "../assets/Button";  
import '../styles/contact.css';
import addIcon from '../assets/images/plus-icon_11985505.png';

function Skills({skills,setSkills,onSkillBackButton,onSkillsContinueClick}){
  
    const handleDelete=(indexToDelete)=>{
        setSkills(skills.filter((_,index)=>index !== indexToDelete));

    }

    const handleAddCertification = (e) => {
        e.preventDefault();
        setSkills([...skills,''])
    }

    const handleChangeInput = (index,value)=>{
        let updatedInputField = [...skills];
        updatedInputField[index] = value;
        setSkills(updatedInputField);
    }

    return(
        <div className="certefication contact">
            <div className="certrificateHeader contactHeader">
                <h1 className="contactTitle">Skills</h1>
                <p className="contactSubtitle">Listing 6-10 skills is best.</p>
            </div>
            <form className="contactForm certForm">
                <div className="certificationName fullName">
                    {skills.map((skill,index)=>(
                        <Input key={index} value = {skill} type="text" name={`Skill #${index + 1}`}
                            onChange={(e)=>handleChangeInput(index,e.target.value)}
                            onClick={()=>handleDelete(index)} 
                        />
                    ))}
                    
                </div>
                <div className="addField">
                    <a href="#" className="contactSubtitle addText" onClick={handleAddCertification}>
                        <img src={addIcon} alt="" className="addIcon" />
                        Add another skill
                    </a>
                </div>

                <div className='educationButton experianceButton'>
                    <Button type="button" value="Back" className="backButton" onClick={onSkillBackButton} />
                    <Button type="button" value="Continue" className="button" onClick={onSkillsContinueClick} />
                </div>
            </form>
            <div className="skipBtn">
                <a href="#" className="skipAnchor">Skip adding skills</a>
            </div>
        </div>
    )
}


export default Skills;