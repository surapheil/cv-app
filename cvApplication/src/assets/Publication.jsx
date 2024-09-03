import { useState } from "react";
import Input from "./InputCertificate";
import Button from "./Button";  
import '../styles/contact.css';
import addIcon from '../assets/images/plus-icon_11985505.png';

function Publications({publications,setPublications,handlePrevSection,handleNextSection}){
    
  
    const handleDelete=(indexToDelete)=>{
        setPublications(publications.filter((_,index)=>index !== indexToDelete));

    }

    const handleAddCertification = (e) => {
        e.preventDefault();
        setPublications([...publications,''])
    }

    const handleChangeInput = (index,value)=>{
        let updatedInputField = [...publications];
        updatedInputField[index] = value;
        setPublications(updatedInputField);
    }

    return(
        <div className="certefication contact">
            <div className="certrificateHeader contactHeader">
                <h1 className="contactTitle">Publications</h1>
                <p className="contactSubtitle"></p>
            </div>
            <form className="contactForm certForm">
                <div className="certificationName fullName">
                    {publications.map((skill,index)=>(
                        <Input key={index} value = {skill} type="text" name={`Publication #${index + 1}`}
                            onChange={(e)=>handleChangeInput(index,e.target.value)}
                            onClick={()=>handleDelete(index)} 
                        />
                    ))}    
                </div>
                <div className="addField">
                    <a href="#" className="contactSubtitle addText" onClick={handleAddCertification}>
                        <img src={addIcon} alt="" className="addIcon" />
                        Add another publication
                    </a>
                </div>

                <div className='educationButton experianceButton'>
                    <Button type="button" value="Back" onClick={handlePrevSection} className="backButton"/>
                    <Button type="button" value="Continue" onClick={handleNextSection} className="button"/>
                </div>
            </form>
            <div className="skipBtn">
                <a href="#" className="skipAnchor">Skip adding publications</a>
            </div>
        </div>
    )
}
export default Publications;