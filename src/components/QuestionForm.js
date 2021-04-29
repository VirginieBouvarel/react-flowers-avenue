import { useState } from "react";


function QuestionForm() {
    const [inputValue, setInputValue]  = useState('Posez votre question ici');

    return (
       <div className="f-form-bottom">
           <textarea 
                className="f-form-question"
                value={inputValue} 
                onChange={event => setInputValue(event.target.value)}
           ></textarea>
           <button 
                className="f-form-btn"
                onClick={() => alert(inputValue)}
                >Alertez-moi
           </button> 
       </div> 
    );
}


export default QuestionForm;