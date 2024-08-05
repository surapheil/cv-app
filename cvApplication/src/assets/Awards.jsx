import { useState } from "react";
import Input from "./InputCertificate";
import Button from "./Button";  
import '../styles/contact.css';
import addIcon from '../assets/images/plus-icon_11985505.png';

function Awards(){
    let [awards,setAwards] = useState(['']);
  
    const handleDelete=(indexToDelete)=>{
        setAwards(awards.filter((_,index)=>index !== indexToDelete));

    }

    const handleAddCertification = (e) => {
        e.preventDefault();
        setAwards([...awards,''])
    }

    const handleChangeInput = (index,value)=>{
        let updatedInputField = [...awards];
        updatedInputField[index] = value;
        setAwards(updatedInputField);
    }

    return(
        <div className="certefication contact">
            <div className="certrificateHeader contactHeader">
                <h1 className="contactTitle">Awards</h1>
                <p className="contactSubtitle"></p>
            </div>
            <form className="contactForm certForm">
                <div className="certificationName fullName">
                    {awards.map((skill,index)=>(
                        <Input key={index} value = {skill} type="text" name={`Award #${index + 1}`}
                            onChange={(e)=>handleChangeInput(index,e.target.value)}
                            onClick={()=>handleDelete(index)} 
                        />
                    ))}    
                </div>
                <div className="addField">
                    <a href="#" className="contactSubtitle addText" onClick={handleAddCertification}>
                        <img src={addIcon} alt="" className="addIcon" />
                        Add another award
                    </a>
                </div>

                <div className='educationButton experianceButton'>
                    <Button type="submit" value="Back" className="backButton"/>
                    <Button type="submit" value="Continue" className="button"/>
                </div>
            </form>
            <div className="skipBtn">
                <a href="#" className="skipAnchor">Skip adding awards</a>
            </div>
        </div>
    )
}
export default Awards;