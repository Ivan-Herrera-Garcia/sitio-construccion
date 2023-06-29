import React from 'react';
import "./Footer.scss";
import {Segment, Container, Grid, Header, List, Divider} from "semantic-ui-react"

export function Footer() {

  return (
    <section id='footer'>
    {/* 
    <Segment inverted vertical style={{ padding: '5em 0em',  backgroundColor: `#e4a94f`}}>
      <Container className='pie'>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted  as='h3' content='Contacto' />
              <List inverted>
                <List.Item >Telefono: 8721552161</List.Item>
                <List.Item >Direccion: San Pedro, Cohuila</List.Item>
                <List.Item >Email: herreraleon14@gmail.com</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h3' content='Servicio disponible en todo Mexico' />
            </Grid.Column>
            <Grid.Column width={7}>
             
              <p>
                Sitio diseñado y desplegado por Ivan Herrera Garcia
              </p>
              <Header as='h3' inverted>
              2023. Todos los derechos reservados
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  */}

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={6} floated='right'>
            <Header inverted as='h4' content='Contacto' />
            <List link inverted>
            <List.Item as='a'>Telefono: +52 (872)-155-2161</List.Item>
              <List.Item as='a'>Movil: +52 (872)-120-3007</List.Item>
              <List.Item as='a'>Email: HERRERALEON14@GMAIL.COM</List.Item>
              <List.Item as='a'>Direccion: Av. Libertad #433, San Pedro, Coahuila</List.Item>
            </List>
          </Grid.Column>
         
          <Grid.Column width={3}>
            <Header inverted as='h4' content='¡Gracias por su visita!' />
           
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Hecho por: Ivan Herrera Garcia'/>
            <p>
              2023. Todos los derechos reservados.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
       
      </Container>
    </Segment>
    </section>
  );
};


 