import React from 'react'
import {Container, Header, Card, Image, Divider} from 'semantic-ui-react'
import {motion} from "framer-motion";
import {fadeIn} from "./../../utils/variants";
import {map} from "lodash"
import { image } from '../../assets';

import"./LastWork.scss";

export function Lastwork() {
  const cards = [
    {
      titulo: 'Piso con color negro',
      img: image.Img_1,
      fecha: '2018',
      descrp: 'Estacionamiento de Bodega Aurrera San Pedro, Cohuila'
     
    },
    {
      titulo: 'Piso pulido con acelerante',
      img: image.Img_2,
      fecha: '2019',
      descrp: 'Central de autobuses Gonzales San Pedro, Cohauila'
    },
    {
      titulo: 'Losa pulida',
      img: image.Img_2,
      fecha: '2019',
      descrp: 'Centro y distribucion de nueces San Pedro (Desc. Prov)'
    }, 
    {
      titulo: 'Pisos y Losas con diferentes acabados',
      img: image.Img_4,
      fecha: 'En la actualidad',
      descrp: 'Pisos y losas en viviendas privadas'
    },
    {
      titulo: 'Pisos y Losas con diferentes acabados',
      img: image.Img_5,
      fecha: 'En la actualidad',
      descrp: 'Pisos y losas en viviendas privadas'
    },
    {
      titulo: 'Pisos y Losas con diferentes acabados',
      img: image.Img_6,
      fecha: 'En la actualidad',
      descrp: 'Pisos y losas en viviendas privadas'
    }
  ]


  return (
    <section id='lastwork' >
      <Divider/>
    <motion.div variants={fadeIn('up', 0.3)} 
    initial='hidden' 
    whileInView={'show'} 
    viewport={{once:false, amount:0.7}} > <div className='contenedor'>
       <Container text className='contenedor'>
      <Header as='h2'>Trabajos realizados</Header>
      <p style={{textAlign: `justify`}}>
       Contamos con experiencias y hemos trabajado a lo largo de coahuila y como muestra de un trabajo bien hecho
       estas son algunas contrucciones realizadas hace tiempo y siguen firmes al dia de hoy:
      </p>
     
      <p style={{textAlign: `justify`}}>
        Nos enorgullece ofrecer servicios profesionales y personalizados, adaptándonos a las necesidades específicas 
        de cada cliente. Trabajamos en estrecha colaboración contigo para comprender tus objetivos y asegurarnos de 
        que el resultado final sea exactamente lo que esperas.
      
      </p>
     
    </Container>
   </div>
   <Divider/>
      <Card.Group itemsPerRow={3} stackable >
          {map(cards, (card) => (
             <Card className='carta'>
             <Image src={card.img} ui={false} className='imagenes'/>
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
  </motion.div>
  <br/>
  </section>
  )
}
