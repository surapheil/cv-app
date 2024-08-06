import { useState } from 'react';
import Contact from './icons/contact2.png';
import contactClicked from './icons/contactClicked.png'
import Experience from './icons/experiance2.png';
import experienceClicked from './icons/exeperience2.png';
import Education from './icons/Education.png';
import educationClicked from './icons/educationClicked.png';
import Certificate from './icons/certificate_17061314.png';
import certificateClicked from './icons/certificateClinked.png';
import Skills from './icons/skills.png';
import skillsClicked from './icons/skillClicked.png';
import Summary from './icons/Summary.png';
import summaryClicked from './icons/summaryClicked.png';
import Reference from './icons/Reference.png';
import referenceClicked from './icons/referenceClicked.png';
import Finalize from './icons/Finalize.png';
import '../styles/Navigation.css';

function Navigation(){
    const [isActive, setIsActive] = useState(null);
     
     const handleClick = (icon,e)=>{
        e.preventDefault();
        setIsActive(icon);
    }

    return (
        <div className="navigation">
            <div className={`contactNavigation navs ${isActive === 'contact' ? 'active' : ''}`} onClick={(e) => handleClick('contact',e)}>
                <a href="">
                    <img src={isActive === 'contact' ? contactClicked : Contact} className="icn" alt="contactIcn" />
                    Contact
                </a>
            </div>
            <div className={`experianceNavigation navs ${isActive === 'experience' ? 'exp' : ''}`} onClick={(e) => handleClick('experience',e)}>
                <a href="#">
                    <img src={isActive === 'experience' ? experienceClicked: Experience} className="icn" alt="experience icon" />
                    Experience
                </a>
            </div>
            <div className={`educationNavigation navs ${isActive === 'education' ? 'edu':''}`} onClick={(e)=>setIsActive('education',e)}>
                <a href="#">
                    <img src={isActive==='education' ? educationClicked:Education} className="icn" alt="education icon" />
                    Education
                </a>
            </div>
            <div className={`certificationNavigation navs ${isActive === 'certification' ? 'cert': ''}`} onClick={(e)=>setIsActive('certification',e)}>
                <a href="#">
                    <img src={isActive === 'certification' ? certificateClicked : Certificate}  className="icn" alt="certification icon" />
                    Certifications
                </a>
            </div>
            <div className= {`skillNavigation navs ${isActive === 'skill' ? 'ski': ''}`} onClick={(e)=>setIsActive('skill',e)}>
                <a href="#">
                    <img src={isActive === 'skill' ? skillsClicked : Skills} className="icn" alt="" />
                    Skills
                </a>
            </div>
            <div className={`summaryNavigation navs ${isActive === 'summary' ? 'sum': ''}`} onClick={(e)=>setIsActive('summary',e)}>
                <a href="#" >
                    <img src={isActive === 'summary' ? summaryClicked : Summary} className="icn" alt="" />
                    Summary
                </a>
            </div>
            <div className={`referenceNavigation navs ${isActive === 'reference' ? 'ref': ''}`} onClick={(e)=>setIsActive('reference',e)}>
                <a href="#" className='refrenceIcn'>
                    <img src={isActive === 'reference' ? referenceClicked: Reference} className="icn" alt="" />
                    Reference
                </a>
            </div>
            <div className={`finalizeNavigation navs ${isActive === 'finalize' ? 'fin': ''}`} onClick={(e)=>setIsActive('finalize',e)}>
                <a href="#" className='finalizeIcn'>
                    <img src={isActive === 'finalize' ? Finalize: Finalize} className="icn" alt="" />
                    Finalize
                </a>
            </div>
        </div>
    )
}

export default Navigation;