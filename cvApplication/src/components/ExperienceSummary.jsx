import { useState, useRef } from 'react';
import Button from '../assets/Button';
import Textarea from '../assets/Textarea';
import '../styles/contact.css'; 
import addIcon from '../assets/images/plus-icon_11985505.png';


const ExperienceSummary = ({onContinueClick,onExperienceSummaryContinueClick}) => {
  const [content, setContent] = useState('');
  const textAreaRef = useRef(null);

  const [bold,setBold] = useState(false);
  const [italic,setItalic] = useState(false);
  const [underline,setUnderline] = useState(false);
  const [unorderedList,setUnorderedList] = useState(false);


  const formatText = (command) =>{
      if(textAreaRef.current){
        const selection = window.getSelection();
        const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

        textAreaRef.current.focus();
        if (range) {
        selection.removeAllRanges();
        selection.addRange(range);
        }

        document.execCommand(command, false, null);
        handleChange();  
      }
  }

  const handleBold = () => {
    setBold(!bold);
    formatText('bold');
  };
  const handleItalic = () => {
    setItalic(!italic);
    formatText('italic');
  };

  const handleUnderline = () => {
    setUnderline(!underline);
    formatText('underline');
  };

  const handleList = () =>{
    setUnorderedList(!unorderedList);
    formatText('insertunorderedlist');
  }

  const handleChange = () => {
    if(textAreaRef.current){
        setContent(textAreaRef.current.innerHTML);
    }
  };

  return (
    <div className="summary contact">
      <div className="summaryHeader contactHeaders">
          <h1 className="summaryTitle contactTitle"> Experience Summary</h1>
          <p className=" summarySubtitle contactSubtitle">This section tells,&quot;Here&apos;s who I am, and here&apos;s what I have done for the company&quot;</p>
      </div>
      <form className='contactForm'>
        <Textarea
          ref={textAreaRef}
          value={content}
          onList = {handleList}
          onChange={handleChange}
          onBold={handleBold}
          onItalic={handleItalic}
          onUnderline={handleUnderline}
          placeHolder="Add, edit, and write here."
        />
        <div className="addField">
            <a href="#" className="contactSubtitle addText"  onClick={onContinueClick}>
                <img src={addIcon} alt="" className="addIcon" />
                Add another Experiance
            </a>
        </div>
        <div className='educationButton experianceButton'>
              <Button type="button" value="Back" className="backButton" onClick={onContinueClick}/>
              <Button type="submit" value="Continue" onClick={onExperienceSummaryContinueClick} className="button"/>
        </div>  
      </form>
      <div className="skipBtn">
          <a href="#" className="skipAnchor">Skip adding Experience</a>
      </div>
    </div>
    
  );
};

export default ExperienceSummary;