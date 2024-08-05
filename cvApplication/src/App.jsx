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

function App() {

  return (
    <div>
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
  )
}

export default App;
