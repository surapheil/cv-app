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
function Education(){
    const [schoolName,setSchoolName] = useState('');
    const [schoolLocation,setSchoolLocation] = useState('');
    const [educationLevel,setEducationLevel] = useState('');
    const [fieldOfStudy,setFieldOfStudy] = useState('');
    const [month,setMonth] = useState('');
    const [year,setYear] = useState('');
    return(
        <div className="education">
            <div className="contactHeader">
                <h1 className="contactTitle">Education</h1>
                <p className="contactSubtitle">Where did you attend college and university?</p>
            </div>
            <form className="educationForm">
                <div className="educationDescription">
                    <Input type="text" value={ schoolName } name="School name" onChange={(e)=>setSchoolName(e.target.value)}/>
                    <Input type="text" value={ schoolLocation } name="School location" onChange={(e)=>setSchoolLocation(e.target.value)} />
                </div>
                <div className='educationProgram'>
                    <Input type="text" value={educationLevel} name="Education level" onChange={(e)=>setEducationLevel(e.target.value)}/>
                    <Input type="text" value={fieldOfStudy} name="Field of study" onChange={(e)=>setFieldOfStudy(e.target.value)}/>
                </div>
                <div className='graduationTiming'>
                    <MonthInput name="Graduation month" value={month} onChange={(e)=>setMonth(e.target.value)} />
                    <YearSelection name="Graduation year" value={year} onChange={(e)=>setYear(e.target.value)} />
                </div>
                <div className="gradeReport">
                    <Input type="text" name="GPA score"/>
                </div>
                <div className='educationButton experianceButton'>
                    <Button type="submit" value="Back" className="backButton"/>
                    <Button type="submit" value="Continue" className="button"/>
                </div>
            </form>
        </div>
    )
}

export default Education;