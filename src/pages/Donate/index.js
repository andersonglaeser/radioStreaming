import React from "react";

//Style
import { Container, ScrollView, TextWhite } from './style';

//Components
import Header from '../../components/Header';

const Donate = props => (
  <Container>
    <Header toggle={props.navigation.toggleDrawer} internalPage={'Apoie'} />

    <ScrollView>
      <TextWhite>
        Texto aqui.
      </TextWhite>
    </ScrollView>
  </Container>
);

export default Donate;