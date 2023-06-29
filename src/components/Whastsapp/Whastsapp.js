import React from 'react'
import {Button} from "semantic-ui-react"
import "./Whatsapp.scss"

export default function Whastsapp() {
    const handleButtonClick = () => {
        const phoneNumber = '+528721203007';
        const message = encodeURIComponent('Hola! Quería saber más acerca de disponibilidad y costos.');
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    
        window.open(url, '_blank');
      };

      const handleCallButtonClickPhone = () => {
        const phoneNumber = '+528721203007';
        window.open(`tel:${phoneNumber}`);
      };
    
      return (
        <div>
        <Button icon='whatsapp' circular  className="whatsapp-button" size='massive'
        onClick={handleButtonClick}/>

        <Button icon='talk' circular  className="phone" size='massive'
        onClick={handleCallButtonClickPhone}/>
        </div>
      );
}
