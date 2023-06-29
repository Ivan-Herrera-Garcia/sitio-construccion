import React, {useState} from 'react'
import {Container, Header, Card, Image, Divider, Modal, Button} from 'semantic-ui-react'

import {map} from "lodash"
import {cards} from "./../../utils"

import"./LastWork.scss";

export function Lastwork() {

  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClickModel = (image) => {
    setSelectedImage(image);
  };

  return (
    <section id='lastwork' >
      <Divider/>
      <div>
       <Container  className='contenedor'>
      <Header as='h2'>Trabajos realizados</Header>
      <p style={{textAlign: `justify`}}>
       Contamos con experiencias y hemos trabajado a lo largo de coahuila y como muestra de un trabajo bien hecho
       estas son algunas contrucciones realizadas hace tiempo y siguen firmes al dia de hoy:
      </p>
     
      <p style={{textAlign: `justify`}}>
        Nos enorgullece ofrecer servicios profesionales y personalizados, adaptándonos a las necesidades específicas 
        de cada cliente. Trabajamos en estrecha colaboración contigo para comprender tus objetivos y asegurarnos de 
        que el resultado final sea exactamente lo que esperas. (Puedes ver mas detalladamente las imagenes al tocarlas)
      </p>
    </Container>
   </div>
   <Divider/>
      <Card.Group itemsPerRow={3} stackable >
          {map(cards, (card) => (
             <Card className='carta'>
              
          <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                
                trigger={<Image src={card.img} ui={false} className='imagenes'onClick={() => handleImageClickModel(card.img)}
                />}
              >
                <Modal.Header>{card.titulo}</Modal.Header>
                <Modal.Content image>
                {selectedImage && <Image src={selectedImage} centered className="imagen-grande"/>}
                </Modal.Content>
                <Modal.Actions>
                <Button onClick={() => setOpen(false)}>Cerrar</Button>
                </Modal.Actions>
              </Modal>
             <Card.Content>
               <Card.Header>{card.titulo}</Card.Header>
               <Card.Meta>
                 <span className='date'>{card.fecha}</span>
               </Card.Meta>
               <Card.Description>
                 {card.descrp}
               </Card.Description>
             </Card.Content>
           </Card>
          ))}
        </Card.Group>
        <Divider/>
  <br/>
  </section>
  )
}
