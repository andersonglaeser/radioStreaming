import React from "react";
import { TouchableOpacity, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//Style
import { Container, Text } from './style';

//Components
import Header from '../../components/Header';
import PlayerStreaming from '../../components/Player';

const Index = props => (
  <LinearGradient colors={['#ffffff', '#2e5775']} style={{flex: 1}}>
    <Container>
      <Header toggle={props.navigation.toggleDrawer} />
      <PlayerStreaming />
      <TouchableOpacity onPress={() => { Linking.openURL("http://www.suaradio.com.br"); }}><Text>www.suaradio.com.br</Text></TouchableOpacity>
    </Container>
  </LinearGradient>
);

export default Index;