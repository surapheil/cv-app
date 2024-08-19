import '../styles/resume.css';
import phoneIcon from './icon/telephone.png';
import emailIcon from './icon/email.png';
import locationIcon from './icon/gps.png';

const Resume = ()=>{
    return (
        <div className="resume">
            <div className="resumeHeader">
                <h1 className="firstName">Surafel</h1>
                <h1 className="lastName">Gashu</h1>
            </div>
            <div className='jobTitle'>
                <h2 className='title'>Project Coordinator</h2>
            </div>

            <div className='contactResume'>
                <div className='phoneResume box'>
                    <img src={phoneIcon} alt="Phone Number"  />                   
                    <p className='txt'>+251942869673</p>
                </div>
                <div className="resumeEmail box">
                    <img src={emailIcon} alt="email Icon" />                   
                    <p className='txt'>surafellamesgin@gmail.com</p>
                </div>
                <div className="resumeLocation box">
                    <img src={locationIcon} alt="locationIcon" />    
                    <p className='txt'>Ethiopia,</p>
                    <p className='txt'>Addis Ababa</p>
                </div>
            </div>
            <div className='proffesionalSummary'>
                <p className='summary'>
                    Highly motivated and organized individual with a strong passion for project management.
                </p>
            </div>
        </div>
    )
}


export default Resume;