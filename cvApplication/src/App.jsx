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

function App() {
  const [isActive, setIsActive] = useState('contact');
  const [finalizeOrder, setFinalizeOrder] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onContinueClick = () => setIsActive('experience');
  const onExperienceBackClick = () => setIsActive('contact');
  const onExperienceContinueClick = () => setIsActive('experienceSummary');
  const onExperienceSummaryContinueClick = () => setIsActive('education');
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
        return <Languages handlePrevSection={handlePrevSection}  handleNextSection={handleNextSection} />;
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

  return (
    <div className='container'>
      <div className='leftNavigation'>
        <Navigation setIsActive={setIsActive} isActive={isActive} />
      </div>
      <div className='main'>
        {isActive === 'contact' && <Contact onContinueClick={onContinueClick} />} 
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
          />
        )}
        {isActive === 'certification' && (
          <Certifications 
            onExperienceSummaryContinueClick={onExperienceSummaryContinueClick} 
            onCertificateContinueClick={onCertificateContinueClick} 
          />
        )}
        {isActive === 'skill' && (
          <Skills 
            onEducationContinueClick={onEducationContinueClick} 
            onSkillsContinueClick={onSkillsContinueClick} 
          />
        )}
        {isActive === 'summary' && (
          <Summary 
            onSummaryContinueClick={onSummaryContinueClick} 
            onCertificateContinueClick={onCertificateContinueClick} 
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
    </div>
  );
}

export default App;
