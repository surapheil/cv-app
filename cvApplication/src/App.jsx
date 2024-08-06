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

function App() {

  return (
    <div className='container'>
      <div className='leftNavigation'>
          <Navigation />
      </div>
      <div className='main'>
          <Contact/> 
          <Experiance/>
          <Education/>
          <Certifications/>
          <Skills/>
          <Summary/>
          <Reference/>
          <Finalize/>
          <Languages/>
          <Volunteer/>
          <Awards/>
          <Publications/>
      </div>
    </div>
    
  )
}

export default App;
