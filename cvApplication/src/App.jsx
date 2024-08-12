import Contact from './components/Contact';
import Experiance from './components/Experiance'
import './App.css'
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
import { useState } from 'react';
import AddReference from './components/AddRef';

function App() {
  const [isActive,setIsActive] = useState('contact');

  const onContinueClick=()=>{
    setIsActive('experience');
  }

  const onExperienceBackClick=()=>{
    setIsActive('contact');
  }

  const onExperienceContinueClick=()=>{
    setIsActive('experienceSummary');
  }

  const onExperienceSummaryContinueClick=()=>{
    setIsActive('education');
  }

  const onEducationContinueClick=()=>{
    setIsActive('certification');
  }

  const onCertificateContinueClick = () => {
    setIsActive('skill');
  }

  const onSkillsContinueClick = () => {
    setIsActive('summary');
  }

  const onSummaryContinueClick = () =>{
    setIsActive('reference');
  }

  const addReferenceClick = () =>{
    setIsActive('addReference');
  }

  const toFinilizeClick = () => {
    setIsActive('finalize');
  }


  console.log(isActive);

  return (
    <div className='container'>
      <div className='leftNavigation'>
          <Navigation setIsActive = {setIsActive} isActive={isActive} />
      </div>
      <div className='main'>
          {isActive === 'contact' && <Contact onContinueClick={onContinueClick} />} 
          {isActive === 'experience' && <Experiance onExperianceBackClick={onExperienceBackClick} onExperienceContinueClick={onExperienceContinueClick}/>}
          {isActive === 'experienceSummary' && <ExperienceSummary onExperienceSummaryContinueClick={onExperienceSummaryContinueClick} onContinueClick={onContinueClick}/>}
          {isActive === 'education' && <Education onEducationContinueClick={onEducationContinueClick} onExperienceContinueClick={onExperienceContinueClick}/>}
          {isActive === 'certification' && <Certifications onExperienceSummaryContinueClick={onExperienceSummaryContinueClick} onCertificateContinueClick={onCertificateContinueClick}/>}
          {isActive === 'skill'&& <Skills onEducationContinueClick={onEducationContinueClick} onSkillsContinueClick={onSkillsContinueClick}/>}
          {isActive === 'summary' && <Summary onSummaryContinueClick = {onSummaryContinueClick} onCertificateContinueClick={onCertificateContinueClick}/>}
          {isActive === 'reference' && <Reference addReferenceClick ={ addReferenceClick } toFinilizeClick={toFinilizeClick} />}
          {isActive === 'finalize' && <Finalize/>}
          {isActive === 'addReference' && <AddReference onSummaryContinueClick={onSummaryContinueClick} toFinilizeClick={toFinilizeClick} />}
          {isActive === '' && <Languages/>}
          {isActive === '' && <Volunteer/>}
          {isActive === '' && <Awards/>}
          {isActive === '' && <Publications/>}
      </div>
    </div>
    
  )
}

export default App;
