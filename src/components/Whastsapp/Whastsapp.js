import React from 'react'
import {Button} from "semantic-ui-react"
import "./Whatsapp.scss"

export default function Whastsapp() {
    const handleButtonClick = () => {
        const phoneNumber = '8721552161';
        const message = encodeURIComponent('Quería más información y saber si tiene disponibilidad');
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    
        window.open(url, '_blank');
      };
    
      return (
        <Button icon='whatsapp' circular  className="whatsapp-button" size='massive'
        onClick={handleButtonClick}/>
        
      );
}
