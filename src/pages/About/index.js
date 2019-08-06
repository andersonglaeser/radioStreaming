import React from "react";

//Style
import { Container, ScrollView, TextWhite } from './style';

//Components
import Header from '../../components/Header';

const About = props => (
  <Container>
    <Header toggle={props.navigation.toggleDrawer} internalPage={'Conheça a rádio'} />
    <ScrollView>
      <TextWhite>
        Texto de apresentação.
      </TextWhite>
    </ScrollView>
  </Container>
);

export default About;