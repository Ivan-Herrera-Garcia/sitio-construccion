import React from 'react';
import {Container, Header, List, Image} from "semantic-ui-react";
import "./AboutUs.scss";
import { image } from '../../assets';

export function AboutUs() {
  return (
    <section id='aboutus' >
      <br/>
    <div> <div className='contenedor' >
       <Container >  <Image src={image.Logo} centered size='big' />
      <Header as='h2'>¿Quienes somos?</Header>
      <p style={{textAlign: `justify`}}>
        En Pisos y Losas Herrera, somos un equipo de profesionales con sede en San Pedro, Coahuila. 
        Nuestro equipo está compuesto por personas con experiencia en el campo de la construcción, y 
        estamos dedicados a brindar servicios de alta calidad en el ámbito de la edificación.

        Nuestra experiencia y conocimiento nos permiten ofrecer una amplia variedad de servicios y soluciones 
        para tus proyectos de construcción. Contamos con la herramientas y equipos que nos permiten realizar 
        trabajos como lo son: <br/>

        <List divided verticalAlign='middle'>
          <List>
            <List.Item as='li'> 
            <h3>Pisos y Losas:</h3>
              <List.Item as='ol'>
                <List.Item> 
                  Pulidos
                </List.Item>
               <List.Item >
                Con Oxicreto/Resina Epoxica (Color en los pisos)
              </List.Item>
              <List.Item >
                Variedad de aditivos: 
                <List.Item>
                  <List.Item as='ol'>
                    <List.Item> 
                      Plastificantes (agentes reductores de agua).
                    </List.Item>
                    <List.Item >
                      Superplastificantes.
                    </List.Item>
                    <List.Item >
                      Incorporadores de aire.
                    </List.Item>
                    <List.Item >
                      Acelerantes.
                    </List.Item>
                    <List.Item >
                      Retardantes.
                    </List.Item>
                  </List.Item>
                </List.Item>
              </List.Item>
            </List.Item>
          </List.Item>
        </List>
      </List>
      </p>
      <p style={{textAlign: `justify`}}>
        Nos enorgullece ofrecer servicios profesionales y personalizados, adaptándonos a las necesidades específicas 
        de cada cliente. Trabajamos en estrecha colaboración contigo para comprender tus objetivos y asegurarnos de 
        que el resultado final sea exactamente lo que esperas.
        
      </p>
  
    </Container></div>
  </div>
  <br/>
  </section>
  )
}
