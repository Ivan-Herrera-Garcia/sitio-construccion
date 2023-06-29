import React from "react";
import { Container, Header, Button, Icon, List} from "semantic-ui-react";
import "./Comentarios.scss";


export function Comentarios() {

    const emailAddress = "herreraleon14@gmail.com";
    const phoneNumber = '+528721203007';

    const handleEmailClick = () => {
        const subject = encodeURIComponent('Pisos y Losas Herrera');
        const body = encodeURIComponent('Hola! Quería saber más acerca de disponibilidad y costos.');
    
        const emailLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
        window.open(emailLink);
      };

      const handleWhatsAppClick = () => {
       
        const message = encodeURIComponent('Hola! Quería saber más acerca de disponibilidad y costos.');
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    
        window.open(url, '_blank');
      };

      const handleCallButtonClick = () => {
        window.open(`tel:${phoneNumber}`);
      };

      const handleTelegramClick = () => {
        const message = encodeURIComponent('¡Hola! Estoy interesado en contactarte.');
        const telegramLink = `https://t.me/${phoneNumber}?text=${message}`;
        window.open(telegramLink);
      };

    return (
        <segment id='comentarios'>
 <div className='contenedor' >
       <Container > 
      <Header as='h2'>Contacto</Header>
      <p style={{textAlign: `justify`}}>
      Si deseas ponerte en contacto con nosotros puedes tocar los botones para realizar una llamada o mediante
      mensaje de texto a través de WhatsApp. <br/>
      De igual manera, en el pie de página está el correo electrónico y más números telefónicos para más disponibilidad
      de contacto. ¡Esperamos trabajar juntos!.
      </p>
      <p style={{textAlign: `justify`}}>
        Nos enorgullece ofrecer servicios profesionales y personalizados, adaptándonos a las necesidades específicas 
        de cada cliente. Trabajamos en estrecha colaboración contigo para comprender tus objetivos y asegurarnos de 
        que el resultado final sea exactamente lo que esperas.
      </p>
        <div className="my-list-container">
      <List horizontal>
            <List.Item >
            <Button color='linkedin' onClick={handleCallButtonClick} size="small" >
                <Icon name='mobile alternate'/>
            </Button>
            </List.Item>
            <List.Item> 
            <Button color='green' onClick={handleWhatsAppClick} size="small" >
                <Icon name='whatsapp'/>
            </Button>
            </List.Item>
            <List.Item > 
            <Button color='instagram' onClick={handleTelegramClick} size="small" >
                <Icon name='telegram plane' />
            </Button>
            </List.Item>
            <List.Item > 
            <Button color='linkedin' onClick={handleEmailClick} size="small">
                <Icon name='mail outline' />
            </Button>
            </List.Item> 
      </List>
     </div>
     
    </Container>
    </div>
        </segment>
      );
}


