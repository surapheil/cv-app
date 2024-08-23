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
                <h2 className='summaryTitle'>
                    PROFFESSIONAL SUMMARY
                    <div className='underline'></div>
                </h2>
                <div className='summaryText'>
                    Results-oriented Mechanical Engineer with a BSc degree from Addis Ababa University,graduating with Great Distinction. Proven track record in project management, 
                    operational excellence, and partnership coordination.Skilled in driving efficiency improvements, securing sponsorships,
                    and organizing successful events.Strong communicator and leader fluent in both Amharic and English,
                    committed to driving innovation and collaboration for impactful outcomes.
                </div>
            </div>
            <div className="skillsResume">
                <h2 className='skillsTitle summaryTitle'>
                    SKILLS
                    <div className='underline'></div>
                </h2>
                <div className="skillsContainer">
                    <div className="box">Project Managment</div>
                    <div className="box">Project Coordination</div>
                    <div className="box">Team leadership and Coordination</div>
                    <div className="box">Sponsorship Aquisition</div>
                    <div className="box">Partnership Development</div>
                    <div className="box">Event Planning and Managment</div>
                    <div className="box">Communication and Interpersonal Skills</div>
                </div>
            </div>
            <div className="experienceResume">
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
        </div>
    )
}


export default Resume;