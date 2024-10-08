import { useState } from 'react';
import Contact from './components/Contact';
import Experiance from './components/Experiance';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Summary from './components/Summary';
import Reference from './components/reference';
import Finalize from './components/Finalize';
import Languages from './components/Languages';
import Volunteer from './assets/Volunteer';
import Awards from './assets/Awards';
import Publications from './assets/Publication';
import Navigation from './navigation/Navigation';
import ExperienceSummary from './components/ExperienceSummary';
import AddReference from './components/AddRef';
import './App.css';
import Resume from './cv/resume';

function App() {
  const [isActive, setIsActive] = useState('contact');
  const [finalizeOrder, setFinalizeOrder] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [experiances,setExperiances] = useState([]);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showSummaryInfo,setShowSummaryInfo] = useState(false);
  const [showEducationInfo,setShowEducationInfo] = useState(false);
  const [showVolunteerInfo,setShowVolunteerInfo] = useState(false);
  const [showAwardInfo,setShowAwardInfo] = useState(false);
  const [showPublicationInfo,setShowPublicationInfo] = useState(false);
  const [showCertificationInfo,setShowCertificationInfo] = useState(false);
  const [showSkillsInfo,setShowSkillsInfo] = useState(false);
  const [showLanguagesInfo,setShowLanguagesInfo] =useState(false);
  const [showExperienceInfo,setShowExperienceInfo] = useState(false);
  const [showExperienceSummaryInfo,setShowExperienceSummaryInfo] = useState(false);
  const [currentlyWorkingHere,setCurrentlyWorkingHere] = useState('');


  const handleAddExperience = (experianceData) =>{
    setExperiances([...experiances, {...experianceData, summary:''}]);
  }


  const handleCurrentlyWorkingHere = (event)=>{
    const {name,checked} = event.target;
    if(checked){
      setCurrentlyWorkingHere(name);
    }
  }

  const handleAddExperienceSummary = (index,summary) =>{
    let updatedExperience = experiances.map((exp,i)=>
      i === index ? {...exp,summary} : exp
    );
    setExperiances(updatedExperience);
  }

  const onContinueClick = () => {
      setIsActive('summary');
      setShowContactInfo(true);
  };
  const onSummaryBackClick = () => setIsActive('contact');
  const onExperienceContinueClick = (experianceData) => {
      handleAddExperience(experianceData);
      setIsActive('experienceSummary');
      setShowExperienceInfo(true);
  };
  const onExperienceBackClick = () => setIsActive('skill');
  const onExperienceSummaryContinueClick = (summary) => {
      handleAddExperienceSummary(experiances.length-1,summary);
      setIsActive('education');
      setShowExperienceSummaryInfo(true);
  }
  const onEducationContinueClick = () =>{
    setIsActive('certification');
    setShowEducationInfo(true);
  }

  const onEducationSkipClick = () =>{
    setIsActive('certification');
  }

  const onEducationBackClick = () => {
    setIsActive('experienceSummary');
  }
  const onCertificateContinueClick = () => {
      setIsActive('reference')
      setShowCertificationInfo(true)
  };

  const onCerteficationSkipClick = () => {
    setIsActive('reference');
  }
  const onSkillsContinueClick = () =>{ 
      setIsActive('experience');
      setShowSkillsInfo(true);
  };

  const onSkillsSkipClick = () => {
    setIsActive('experience');
  }

  const onSkillBackButton = () =>{
    setIsActive('summary');
  }
  const onSummaryContinueClick = () => {
    setIsActive('skill');
    setShowSummaryInfo(true);
  };

  const onSummarySkipClick = () =>{
    setIsActive('skill');
  }
  const addReferenceClick = () => setIsActive('addReference');
  const toFinalizeClick = () => {setIsActive('finalize');}
  

  const onFinalizeContinueClick = (selectedSections) => {
    setFinalizeOrder(selectedSections);
    setCurrentIndex(0); // Start from the first selected section
    setIsActive('finalizeContinue');
  };
  console.log(finalizeOrder);
  const handleNextSection = () => {
    
    if (currentIndex <= finalizeOrder.length - 1) {
      if(finalizeOrder[currentIndex] === 'Languages'){
        setShowLanguagesInfo(true); 
      }
      else if(finalizeOrder[currentIndex]==='Volunteer'){
        setShowVolunteerInfo(true);
      }
      else if(finalizeOrder[currentIndex]==='Awards'){
        setShowAwardInfo(true);
      }
      else if(finalizeOrder[currentIndex]==='Publications'){
        setShowPublicationInfo(true);
      }
      setCurrentIndex(currentIndex + 1);
    } 
    
  };

  const handlePrevSection = () => {
    if (currentIndex >= 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      console.log('All sections completed');
      // Handle what happens after all sections are done
    }
  };

  const renderCurrentSection = () => {
    const currentSection = finalizeOrder[currentIndex];
    switch (currentSection) {
      case 'Languages':
        return <Languages handlePrevSection={handlePrevSection} languages={languages} setLanguages={setLanguages}  handleNextSection={handleNextSection} />;
      case 'Volunteer':
        return <Volunteer handlePrevSection={handlePrevSection} volunteer={volunteer} setVolunteer={setVolunteer} handleNextSection={handleNextSection} />;
      case 'Awards':
        return <Awards handlePrevSection={handlePrevSection} awards={awards} setAwards={setAwards} handleNextSection={handleNextSection} />;
      case 'Publications':
        return <Publications handlePrevSection={handlePrevSection} publications={publications} setPublications={setPublications} handleNextSection={handleNextSection} />;
      default:
        return null;
    }
  };

const [contact,setContact] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    country: '',
    city: '',
    jobTitle: ''

});



const [education, setEducation] = useState({
    schoolName:'',
    schoolLocation:'',
    educationLevel:'',
    fieldOfStudy:'',
    month:'',
    year:'',
    GPA:''
});

const [content, setContent] = useState('');

let [skills,setSkills] = useState(['']);

let [certification,setCertifications] = useState(['']);

let [languages,setLanguages] = useState(
  [{
      name: '',
      proficiency: '',
  }]
);

let [volunteer, setVolunteer] = useState([]);
let [publications,setPublications] = useState(['']);
let [awards,setAwards] = useState(['']);


return (
    <div className='container'>
      <div className='leftNavigation'>
        <Navigation setIsActive={setIsActive} isActive={isActive} />
      </div>
      <div className='main'>
        <div className='leftMain'>
          {isActive === 'contact' && 
            <Contact onContinueClick={onContinueClick} contact={contact} setContact={setContact} />} 
          {isActive === 'experience' && (
            <Experiance 
              onExperianceBackClick={onExperienceBackClick} 
              onExperienceContinueClick={onExperienceContinueClick} 
              handleCurrentlyWorkingHere={handleCurrentlyWorkingHere}
            />
          )}
          {isActive === 'experienceSummary' && (
            <ExperienceSummary 
              onExperienceSummaryContinueClick={onExperienceSummaryContinueClick} 
              onSkillsContinueClick={onSkillsContinueClick} 
            />
          )}
          {isActive === 'education' && (
            <Education 
              onEducationContinueClick={onEducationContinueClick} 
              onEducationBackClick = {onEducationBackClick}
              education={education}
              setEducation={setEducation}
              onEducationSkipClick={onEducationSkipClick}
            />
          )}
          {isActive === 'certification' && (
            <Certifications 
              onExperienceSummaryContinueClick={onExperienceSummaryContinueClick} 
              onCertificateContinueClick={onCertificateContinueClick} 
              certification={certification}
              setCertifications={setCertifications}
              onCerteficationSkipClick={onCerteficationSkipClick}
            />
          )}
          {isActive === 'skill' && (
            <Skills 
              onSkillBackButton ={onSkillBackButton}
              onSkillsContinueClick={onSkillsContinueClick}
              skills={skills}
              setSkills={setSkills}
              onSkillsSkipClick={onSkillsSkipClick} 
            />
          )}
          {isActive === 'summary' && (
            <Summary 
              onSummaryContinueClick={onSummaryContinueClick} 
              onSummaryBackClick={onSummaryBackClick} 
              content={content}
              setContent={setContent}
              onSummarySkipClick = {onSummarySkipClick}
            />
          )}
          {isActive === 'reference' && (
            <Reference 
              addReferenceClick={addReferenceClick} 
              toFinalizeClick={toFinalizeClick} 
            />
          )}
          {isActive === 'finalize' && (
            <Finalize 
              onSummaryContinueClick={onSummaryContinueClick} 
              onFinalizeContinueClick={onFinalizeContinueClick} 
            />
          )}
          {isActive === 'addReference' && (
            <AddReference 
              onCertificateContinueClick = {onCertificateContinueClick}
              toFinalizeClick={toFinalizeClick} 
            />
          )}
          {isActive === 'finalizeContinue' && renderCurrentSection()}
        </div>
        <div className='rightMain'>
            <Resume 
              contact={contact} 
              showExperienceInfo={showExperienceInfo}
              currentlyWorkingHere={currentlyWorkingHere}
              showExperienceSummaryInfo={showExperienceSummaryInfo} 
              showLanguagesInfo={showLanguagesInfo} 
              experiances={experiances} 
              showCertificationInfo={showCertificationInfo} 
              showEducationInfo={showEducationInfo} 
              showSkillsInfo={showSkillsInfo} 
              showSummaryInfo={showSummaryInfo} 
              showContactInfo={showContactInfo} 
              showVolunteerInfo={showVolunteerInfo}
              showAwardInfo={showAwardInfo}
              showPublicationInfo={showPublicationInfo}
              content={content} 
              skills={skills} 
              education={education} 
              certification={certification} 
              languages={languages}
              awards={awards}
              publications={publications}
              volunteer = {volunteer}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
