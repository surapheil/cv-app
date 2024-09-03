import { useState } from "react";
import Input from "../assets/InputCertificate";
import Button from "../assets/Button";  
import '../styles/contact.css';
import addIcon from '../assets/images/plus-icon_11985505.png';

function Certifications({certification,setCertifications,onCerteficationSkipClick,onExperienceSummaryContinueClick,onCertificateContinueClick}){

    const handleDelete=(indexToDelete)=>{
        setCertifications(certification.filter((_,index)=>index !== indexToDelete));

    }

    const handleAddCertification = (e) => {
        e.preventDefault();
        setCertifications([...certification,''])
    }

    const handleChangeInput = (index,value)=>{
        let updatedInputField = [...certification];
        updatedInputField[index] = value;
        setCertifications(updatedInputField);
    }

    return(
        <div className="certefication contact">
            <div className="certrificateHeader contactHeader">
                <h1 className="contactTitle">Certifications and licenses</h1>
                <p className="contactSubtitle">If you have certain certifications or licenses, this is where you should list them.</p>
            </div>
            <form className="contactForm certForm">
                <div className="certificationName fullName">
                    {certification.map((cert,index)=>(
                        <Input key={index} value = {cert} type="text" name={`Certification #${index + 1}`}
                            onChange={(e)=>handleChangeInput(index,e.target.value)}
                            onClick={()=>handleDelete(index)} 
                        />
                    ))}
                    
                </div>
                <div className="addField">
                    <a href="#" className="contactSubtitle addText" onClick={handleAddCertification}>
                        <img src={addIcon} alt="" className="addIcon" />
                        Add another certification
                    </a>
                </div>

                <div className='educationButton experianceButton'>
                    <Button type="button" value="Back" className="backButton" onClick={onExperienceSummaryContinueClick} />
                    <Button type="button" value="Continue" className="button" onClick={onCertificateContinueClick}/>
                </div>
            </form>
            <div className="skipBtn">
                <a href="#" className="skipAnchor" onClick={onCerteficationSkipClick}>Skip adding certificates and licences</a>
            </div>
        </div>
    )
}


export default Certifications;