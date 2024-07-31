import React from 'react';
import boldIcon from '../assets/images/bold-text-option.png';
import italicIcon from '../assets/images/italic-font.png';
import underlineIcon from '../assets/images/underline-text-option.png';
import listIcon from '../assets/images/list.png';
import '../styles/contact.css';
import '../styles/textarea.css';

const Textarea = React.forwardRef((props,ref) => {

  const {onList,onBold,onItalic,onUnderline,onChange,placeHolder} = props;

  return(
    <div className='textareaContainer'>
        <div className="icons">
            <div className="Bold" onClick={onBold}>
                <img src={boldIcon}  alt="Bold icon" className='icon' />
            </div>
            <div className="Italic" onClick={onItalic}>
                <img src={italicIcon}  alt="Italic icon" className='icon' />
            </div>
            <div className="Underline"onClick={onUnderline}>
                <img src={underlineIcon}  alt="Underline icon" className='icon' />
            </div>
            <div className="Unorderedlist" onClick={onList}>
                <img src={listIcon}  alt="List icon" className='icon'/>
            </div>
        </div>
        <div
            ref={ref}
            contentEditable
            className='textArea'
            onInput={onChange}
            placeholder={placeHolder}
            style={{ whiteSpace: 'pre-wrap' }}
        >
        </div>
    </div>
    
  );
}
);

Textarea.displayName = 'Textarea';


export default Textarea;