import { useState, useRef } from 'react';
import Button from '../assets/Button';
import Textarea from '../assets/Textarea';
import '../styles/contact.css';

const Summary = ({content,setContent,onSummarySkipClick,onSummaryBackClick,onSummaryContinueClick }) => {
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
          <h1 className="summaryTitle contactTitle"> Professional Summary</h1>
          <p className=" summarySubtitle contactSubtitle">This section tells,&quot;Here&apos;s who I am, and here&apos;s what I can do for your company&quot;</p>
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
        <div className='educationButton experianceButton'>
              <Button type="button" value="Back" onClick={onSummaryBackClick} className="backButton"/>
              <Button type="button" value="Continue" onClick={onSummaryContinueClick} className="button"/>
        </div>
      </form>
      <div className="skipBtn">
          <a href="#" className="skipAnchor" onClick={onSummarySkipClick}>Skip adding summary</a>
       </div>
      
    </div>
    
  );
};

export default Summary;