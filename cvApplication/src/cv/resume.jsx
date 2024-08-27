import '../styles/resume.css';
import phoneIcon from './icon/telephone.png';
import emailIcon from './icon/email.png';
import locationIcon from './icon/gps.png';

const Resume = ({contact,content,skills,education,certification,languages})=>{
    return (
        <div className="resume">
            <div className="resumeHeader">
                <h1 className="firstName">{contact.firstName}</h1>
                <h1 className="lastName">{contact.lastName}</h1>
            </div>
            <div className='jobTitle'>
                <h2 className='title'>{contact.jobTitle}</h2>
            </div>

            <div className='contactResume'>
                <div className='phoneResume box'>
                    <img src={phoneIcon} alt="Phone Number"  />                   
                    <p className='txt'>{contact.phone}</p>
                </div>
                <div className="resumeEmail box">
                    <img src={emailIcon} alt="email Icon" />                   
                    <p className='txt'>{contact.email}</p>
                </div>
                <div className="resumeLocation box">
                    <img src={locationIcon} alt="locationIcon" />    
                    <p className='txt'>{contact.country},</p>
                    <p className='txt'>{contact.city}</p>
                </div>
            </div>
            <div className='proffesionalSummary'>
                <h2 className='summaryTitle'>
                    PROFFESSIONAL SUMMARY
                    <div className='underline'></div>
                </h2>
                <div className='summaryText'>
                    {content}
                </div>
            </div>
            <div className="skillsResume">
                <h2 className='skillsTitle summaryTitle'>
                    SKILLS
                    <div className='underline'></div>
                </h2>
                <div className="skillsContainer">
                    {skills.map((skill, index) => (
                        <div key={index} className="box">{skill}</div>
                    ))} 
                </div>
            </div>
            <div className="experienceResumeContainer">
                <h2 className='experienceJobTitle'>
                    EXPERIENCE 
                    <div className='underline'></div>
                </h2>
                <div className='experianceResume'>
                    <div className='experianceHeading'>
                        <h3 className='experianceJobTitle'>Projects and Operation Excellence Coordinator,</h3>
                        <h3 className='experianceJobPlace'>Addis Ababa</h3>
                    </div>
                    <div className='employmentJobStatus'>
                        <p className="companyName">Hilina Enriched Foods,</p>
                        <p className='employmentDuration'>August,2023 - Present</p>
                    </div>
                    <div className='jobResponsibilities'>
                        <ul className='responsiblities'>
                            <li>Led projects focused on implementing operational
                                excellence methodologies, including 5S implementation,
                                resulting in signiﬁcant improvements: Increased machine
                                availability by 6% , Improved machine performance by 15%
                                ,Enhanced product quality by 0.12% ,Achieved a 16%
                                increase in overall equipment eﬃciency with in 9 months.
                            </li>
                            <li>
                                Coordinated production, quality, and technical teams to
                                implement the 5S methods.
                            </li>
                            <li>
                                restructured the training system for new employees and
                                organized refreshment trainings for management staﬀ .
                            </li>
                            <li>
                                Developed and maintained dashboards for coordinating
                                technical, production, and quality teams, facilitating
                                eﬀective communication and decision-making.
                            </li>
                            <li>
                                Led weekly managerial meetings involving production,
                                quality, and technical teams, resulting in the resolution of 57
                                corrective actions and 37 system improvements in 6 months
                                time.
                            </li>
                            <li>
                                Worked with supervisors and managers to develop
                                schedules, monitor deadlines and coordinate resources.
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>
            <div className="educationResumeContainer">
                <h2 className='educationTitle'>
                    EDUCATION 
                    <div className='underline'></div>
                </h2>
                <div className="educationDetail">
                    <div className='educationHeading'>
                        <h3 className='educationField'>{education.educationLevel} in {education.fieldOfStudy},</h3>
                        <h3 className='educationPlace'>{education.schoolLocation}</h3>
                    </div>
                    <div className='educationStatus'>
                        <div className='educationSchoolAndDuration'>
                            <p className="companyName">{education.schoolName},</p>
                            <p className='employmentDuration'>{education.month} {education.year}</p>
                        </div>
                        <div>
                            <p className='grade'>GPA {education.GPA}</p>
                        </div>
                    </div>   
                </div>
            </div>
            <div className="certificationResumeContainer educationResumeContainer">
                <div className='certicicationTitle educationTitle'>
                    <h2 className='certificationTitle'>CERTIFICATIONS</h2>
                    <div className='underline'></div>
                </div>
                <div className='certificationNames'>
                    <ul className='certificationLists'>
                        {certification.map((cert,index)=>(
                            <li key={index}>{cert}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="languageResumeContainer educationResumeContainer">
                <div className="languageTitle educationTitle">
                    <h2 className='languageHeader '>LANGUAGES</h2>
                    <div className='underline'></div>
                </div>
                <div className="certificationNames">
                    <ul className='languagesLists'>
                        {languages.map((lang,index)=>(
                            <li key={index} className='langContainer'>
                                {lang.name}
                                <div className='langProficiency'>{lang.proficiency}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Resume;