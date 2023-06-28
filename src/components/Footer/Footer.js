import React from 'react';
import "./Footer.scss";
import {Segment, Container, Grid, Header, List} from "semantic-ui-react"

export function Footer() {

  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Contacto' />
              <List link inverted>
                <List.Item as='a'>Telefono: 8721552161</List.Item>
                <List.Item as='a'>Dir: San Pedro, Cohuila</List.Item>
                <List.Item as='a'>Email: herreraleon14@gmail.com</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Servicio disponible en todo Mexico' />
             {/*} <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
  </List>*/}
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
              2023. Todos los derechos reservados
              </Header>
              <p>
                Sitio diseñado y desplegado por Ivan Herrera Garcia
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};


 