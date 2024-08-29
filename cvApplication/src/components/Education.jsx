import Input from '../assets/Input';
import Button from '../assets/Button';
import '../styles/Education.css';
import '../styles/Experiance.css'
import MonthInput from '../assets/monthSelection';
import '../styles/yearAndMonthSelection.css';
import '../styles/contact.css';
import '../assets/yearSelection';
import YearSelection from '../assets/yearSelection';
import { useState } from 'react';
function Education({education,setEducation,onEducationBackClick,onEducationContinueClick}){
  

    const handleChange = (prop,value) =>{
        const currentEducation = {...education};
        currentEducation[prop] = value;
        setEducation(currentEducation);
    }
    return(
        <div className="education">
            <div className="contactHeader">
                <h1 className="contactTitle">Education</h1>
                <p className="contactSubtitle">Where did you attend college and university?</p>
            </div>
            <form className="educationForm">
                <div className="educationDescription">
                    <Input type="text" value={ education.schoolName } name="School name" onChange={(e)=>handleChange('schoolName',e.target.value)}/>
                    <Input type="text" value={ education.schoolLocation } name="School location" onChange={(e)=>handleChange('schoolLocation',e.target.value)} />
                </div>
                <div className='educationProgram'>
                    <Input type="text" value={education.educationLevel} name="Education level" onChange={(e)=>handleChange('educationLevel',e.target.value)}/>
                    <Input type="text" value={education.fieldOfStudy} name="Field of study" onChange={(e)=>handleChange('fieldOfStudy',e.target.value)}/>
                </div>
                <div className='graduationTiming'>
                    <MonthInput name="Graduation month" value={education.month} onChange={(selectedOption)=>handleChange('month',selectedOption)} />
                    <YearSelection name="Graduation year" value={education.year} onChange={(selectedOption)=>handleChange('year',selectedOption)} />
                </div>
                <div className="gradeReport">
                    <Input type="text" name="GPA score" value={education.GPA} onChange={(e)=>handleChange('GPA',e.target.value)}/>
                </div>
                <div className='educationButton experianceButton'>
                    <Button type="button" value="Back" onClick={onEducationBackClick} className="backButton"/>
                    <Button type="button" value="Continue" onClick={onEducationContinueClick} className="button"/>
                </div>
            </form>
        </div>
    )
}

export default Education;