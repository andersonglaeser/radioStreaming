import styled from 'styled-components/native';

export const View = styled.View`
  height: 250;
  justify-content: space-between;
`;

export const PlayerImg = styled.Image`
  width: 90;
  height: 90;
  resize-mode: contain;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  height: 95
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 15;
  margin-top: 10;
`;

export const VolumeContainer = styled.View`
  width: 90%;
  flex-direction: row;
`;

export const VolumeImg = styled.Image`
  width: 20;
  height: 20;
  resize-mode: contain;
  margin-right: 10;
  margin-top: 10;
`;