import { useEffect,useState } from "react";
import '../styles/yearAndMonthSelection.css';
import '../styles/contact.css';
import '../styles/Education.css';
import '../styles/Experiance.css';
import Button from "../assets/Button";
import addIcon from '../assets/images/plus-icon_11985505.png';
function Languages({ languages,setLanguages,handlePrevSection,handleNextSection}){

    const handleAddLanguages = (e)=>{
        e.preventDefault();
       setLanguages([...languages,{name:'',proficiency:''}])
    }

    const handleChangeLanguage = (index,value)=>{
        let updatedSelectField = [...languages];
        updatedSelectField[index].name= value;
        setLanguages(updatedSelectField);
    }

    const handleChangeProficiency = (index,value)=>{
        let updatedSelectField = [...languages];
        updatedSelectField[index].proficiency = value;
        setLanguages(updatedSelectField);
    }

    let [isValid,setIsValid] = useState(false);
    let [isFocused,setIsFocused] = useState(false);

    const handleFocus = ()=>{setIsFocused(true)};
    const handleBlur = () => {
        setIsFocused(false);
        const select = document.getElementById('monthSelect');
        if(select.value !== ''){
            setIsValid(true);
        }
        else{
            setIsValid(false);
        }
    }

    useEffect(()=>{
        setIsValid(false);
        setIsFocused(false);
    },[]);

    console.log(languages);
    return(
        <div className="contact ">
            <div className='contactHeaders'>
                <h1 className='contactTitle'> Languages </h1>
            </div>
            <form className="contactForm">
                <div className="monthSelection languageInputs">
                    {languages.map((lang,index)=>(
                        <div key={index} className="langProf">
                            <div>
                                <select
                                        key={index}
                                        value={lang.name}
                                        name={`Language #${index + 1}`}
                                        id="monthSelect"
                                        className="months selection languageSelection"
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        onChange={(e)=>{handleChangeLanguage(index,e.target.value)}}
                                        required
                                >
                                        <option value=""></option>
                                        <option value="Amharic">Amharic</option>
                                        <option value="Arabic">Arabic</option>
                                        <option value="Chinese">Chinese</option>
                                        <option value="English">English</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="French">French</option>
                                        <option value="German">German</option>                    
                                </select>
                                <span className={`monthsPlaceholder languageSelection ${ isFocused || isValid ? 'transformed': '' }`}>Language</span>
                              
                            </div>
                            <div>
                            <select 
                                        name="Proficiency"
                                        value={lang.proficiency}
                                        id="monthSelect"
                                        className="months selection languageSelection"
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        onChange={(e)=>{handleChangeProficiency(index,e.target.value)}}
                                        required
                                    >
                                        <option value=""></option>
                                        <option value="Native">Native</option>
                                        <option value="Fluent">Fluent</option> 
                                        <option value="Advanced">Advanced</option>
                                        <option value="Conversational">Conversational</option>
                                        <option value="Intermediate">Intermediate</option> 
                                        <option value="Beginner">Beginner</option>
                                    </select>
                                    <span className={`monthsPlaceholder languageSelection ${ isFocused || isValid ? 'transformed': '' }`}>Proficiency level</span>
                            </div>
                      </div>
                    ))}
                </div>
            <div className="addField">
                <a href="#" className="contactSubtitle addText" onClick={handleAddLanguages}>
                    <img src={addIcon} alt="" className="addIcon" />
                    Add another certification
                </a>
            </div>
            <div className='educationButton experianceButton'>
                    <Button type="button" value="Back"  onClick={handlePrevSection} className="backButton"/>
                    <Button type="button" value="Continue" onClick={handleNextSection} className="button"/>
            </div>
            </form>
            
        </div>
       
    )
}


export default Languages;