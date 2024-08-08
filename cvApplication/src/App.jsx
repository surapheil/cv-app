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
import { useState } from 'react';

function App() {
  const [isActive,setIsActive] = useState('contact')

  return (
    <div className='container'>
      <div className='leftNavigation'>
          <Navigation setIsActive = {setIsActive} isActive={isActive} />
      </div>
      <div className='main'>
          {isActive === 'contact' && <Contact/>} 
          {isActive=== 'experience' && <Experiance/>}
          {isActive === 'education' && <Education/>}
          {isActive === 'certification' &&<Certifications/>}
          {isActive === 'skill'&& <Skills/>}
          {isActive === 'summary' &&<Summary/>}
          {isActive === 'reference' &&<Reference/>}
          {isActive === 'finalize' &&<Finalize/>}
          {isActive === '' &&<Languages/>}
          {isActive === '' &&<Volunteer/>}
          {isActive === '' &&<Awards/>}
          {isActive === '' &&<Publications/>}
      </div>
    </div>
    
  )
}

export default App;
