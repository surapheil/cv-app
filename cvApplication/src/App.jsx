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
  console.log(experiances);

  const handleAddExperience = (experianceData) =>{
    setExperiances([...experiances, {...experianceData, summary:''}]);
  }

  const handleAddExperienceSummary = (index,summary) =>{
    let updatedExperience = experiances.map((exp,i)=>
      i === index ? {...exp,summary} : exp
    );
    setExperiances(updatedExperience);
  }

  const onContinueClick = () => setIsActive('experience');
  const onExperienceBackClick = () => setIsActive('contact');
  const onExperienceContinueClick = (experianceData) => {
    handleAddExperience(experianceData);
    setIsActive('experienceSummary');
  };
  const onExperienceSummaryContinueClick = (summary) => {
    handleAddExperienceSummary(experiances.length-1,summary);
    setIsActive('education');
  }
  const onEducationContinueClick = () => setIsActive('certification');
  const onCertificateContinueClick = () => setIsActive('skill');
  const onSkillsContinueClick = () => setIsActive('summary');
  const onSummaryContinueClick = () => setIsActive('reference');
  const addReferenceClick = () => setIsActive('addReference');
  const toFinalizeClick = () => {setIsActive('finalize');}
  

  const onFinalizeContinueClick = (selectedSections) => {
    setFinalizeOrder(selectedSections);
    setCurrentIndex(0); // Start from the first selected section
    setIsActive('finalizeContinue');
  };

  const handleNextSection = () => {
    if (currentIndex < finalizeOrder.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log('All sections completed');
      // Handle what happens after all sections are done
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
        return <Volunteer handlePrevSection={handlePrevSection}  handleNextSection={handleNextSection} />;
      case 'Awards':
        return <Awards handlePrevSection={handlePrevSection}  handleNextSection={handleNextSection} />;
      case 'Publications':
        return <Publications handlePrevSection={handlePrevSection}  handleNextSection={handleNextSection} />;
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

})

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


return (
    <div className='container'>
      <div className='leftNavigation'>
        <Navigation setIsActive={setIsActive} isActive={isActive} />
      </div>
      <div className='main'>
        <div className='leftMain'>
          {isActive === 'contact' && <Contact onContinueClick={onContinueClick} contact={contact} setContact={setContact} />} 
          {isActive === 'experience' && (
            <Experiance 
              onExperianceBackClick={onExperienceBackClick} 
              onExperienceContinueClick={onExperienceContinueClick} 
            />
          )}
          {isActive === 'experienceSummary' && (
            <ExperienceSummary 
              onExperienceSummaryContinueClick={onExperienceSummaryContinueClick} 
              onContinueClick={onContinueClick} 
            />
          )}
          {isActive === 'education' && (
            <Education 
              onEducationContinueClick={onEducationContinueClick} 
              onExperienceContinueClick={onExperienceContinueClick} 
              education={education}
              setEducation={setEducation}
            />
          )}
          {isActive === 'certification' && (
            <Certifications 
              onExperienceSummaryContinueClick={onExperienceSummaryContinueClick} 
              onCertificateContinueClick={onCertificateContinueClick} 
              certification={certification}
              setCertifications={setCertifications}
            />
          )}
          {isActive === 'skill' && (
            <Skills 
              onEducationContinueClick={onEducationContinueClick} 
              onSkillsContinueClick={onSkillsContinueClick}
              skills={skills}
              setSkills={setSkills} 
            />
          )}
          {isActive === 'summary' && (
            <Summary 
              onSummaryContinueClick={onSummaryContinueClick} 
              onCertificateContinueClick={onCertificateContinueClick} 
              content={content}
              setContent={setContent}
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
              onSummaryContinueClick={onSummaryContinueClick} 
              toFinalizeClick={toFinalizeClick} 
            />
          )}
          {isActive === 'finalizeContinue' && renderCurrentSection()}
        </div>
        <div className='rightMain'>
            <Resume contact={contact} experiances={experiances} content={content} skills={skills} education={education} certification={certification} languages={languages}/>
        </div>
      </div>
    </div>
  );
}

export default App;
