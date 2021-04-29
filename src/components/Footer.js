import '../styles/Footer.css'
import { useState } from 'react'

function Footer() {
    const [inputValue, setInputValue] = useState('');

    function handleInput(event) {
        setInputValue(event.target.value);
    }
    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Adresse email invalide");
        }
    }

    return (
       <footer className="f-footer">
           <p className="f-footer-text">Pour les fans de fleurs 🌼</p>
           <p className="f-footer-text">Laissez-nous votre email :</p>
           <input 
                placeholder="Entrez votre mail"
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
           />
       </footer>
    );
}

export default Footer;