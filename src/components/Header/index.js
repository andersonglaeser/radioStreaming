import React from 'react';

//Style
import { Container, Button, MenuImg, Text } from './style';

//Images
import imgMenu from '../../assets/images/menu.png';

const Header = props => {

  return (
    <Container>
      <Button onPress={() => { props.toggle(); }}>
        <MenuImg source={imgMenu} />
      </Button>
      <Text>{ props.internalPage }</Text>
    </Container>
  );
}

export default Header;