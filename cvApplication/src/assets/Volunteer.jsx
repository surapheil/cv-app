import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import '../styles/Experiance.css';
import '../styles/contact.css';
import MonthInput from '../assets/monthSelection';
import YearSelection from '../assets/yearSelection';


function Volunteer({handlePrevSection,handleNextSection}){
    const [JobTitle,setJobTitle] = useState('');
    const [Company,setCompany] = useState('');
    const [Country,setCountry] = useState('');
    const [Province,setProvince] = useState('');
    const [City,setCity] = useState('');
    const [startMonth,setStartMonth] = useState('');
    const [endMonth,setEndMonth] = useState('');
    const [startYear,setStartYear] = useState('');
    const [endYear,setEndYear] = useState('');
    return(
        <div className='experiance'>
            <div className='contactHeaders'>
                <h1 className='contactTitle'>Volunteer Experience</h1>
                <p className='contactSubtitle'>Let&apos;s start with your most recent job</p>
            </div>
            <form className='experianceForm' >
                <div className='experianceDescription'>
                    <Input name="Job Title" value={ JobTitle } onChange={(e)=>setJobTitle(e.target.value)}/>
                    <Input name="Company Name" value={ Company } onChange={(e)=>setCompany(e.target.value)} />
                </div>
                <div className='workLocation'>
                    <Input name="Country" value={ Country } onChange={(e)=>setCountry(e.target.value)} />
                    <Input name="Province or State" value={ Province } onChange={(e)=>setProvince(e.target.value)}/>
                    <Input name="City" value={ City } onChange={(e)=>setCity(e.target.value)}/>
                </div>
                <div className='graduationTiming'>
                    <MonthInput name="Start month" value={startMonth} onChange={(e)=>setStartMonth(e.target.value)} />
                    <YearSelection name="Start year" value={startYear} onChange={(e)=>setStartYear(e.target.value)} />
                </div>
                <div className='graduationTiming'>
                    <MonthInput name="End months" value={endMonth} onChange={(e)=>setEndMonth(e.target.value)} />
                    <YearSelection name="End year" value={endYear} onChange={(e)=>setEndYear(e.target.value)} />
                </div>
                <div className='experianceCheckBox'>
                    <input  type="checkbox"/>
                    <label >Currently Working Here</label>
                </div>
                <div className='experianceButton'>
                    <Button name ="Back" value = "Back" onClick={handlePrevSection} className="backButton" type="button"/>
                    <Button name="Continue" value="Continue" className="button" onClick={handleNextSection} type="button"/>
                </div>
            </form>
            
        </div>
    )
}


export default Volunteer;