import React from "react";

//Style
import { Container, ScrollView, TextTitle, TextWhite } from './style';

//Components
import Header from '../../components/Header';

const Calendar = props => (
  <Container>
    <Header toggle={props.navigation.toggleDrawer} internalPage={'Programação'} />
    <ScrollView>
      <TextTitle>
        Segunda-feira
      </TextTitle>
      
      <TextWhite>
        Texto com a programação.
      </TextWhite>

      <TextTitle>
        Terça-feira
      </TextTitle>
      
      <TextWhite>
        Texto com a programação.
      </TextWhite>

      <TextTitle>
        Quarta-feira
      </TextTitle>
      
      <TextWhite>
        Texto com a programação.
      </TextWhite>

      <TextTitle>
        Quinta-feira
      </TextTitle>
      
      <TextWhite>
        Texto com a programação.
      </TextWhite>

      <TextTitle>
        Sexta-feira
      </TextTitle>
      
      <TextWhite>
        Texto com a programação.
      </TextWhite>

      <TextTitle>
        Sábado
      </TextTitle>
      
      <TextWhite>
        Texto com a programação.
      </TextWhite>


      <TextTitle>
        Domingo
      </TextTitle>
      
      <TextWhite>
        Texto com a programação.
      </TextWhite>
    </ScrollView>
  </Container>
);

export default Calendar;