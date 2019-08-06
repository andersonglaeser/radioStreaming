import React, { useState, useEffect } from 'react';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';

//Style
import { View, Button, PlayerImg, VolumeContainer, VolumeImg, Text } from './style';

//Images
import imgPlay from '../../assets/images/play.png';
import imgPause from '../../assets/images/pause.png';
import imgVolume from '../../assets/images/volume.png';

const PlayerStreaming = () => {
  const streamingUrl = 'http://servidor38.brlogic.com:8382/live';

  const [playing, setPlaying] = useState(false);
  const [playingDescription, setPlayingDescription] = useState('');
  const [volume, setVolume] = useState(1.0);
  const [sliderValue, setSliderValue] = useState(1.0);

  useEffect(() => {
    
  });

  playPause = playing => {
    if (playing) {
      setPlaying(false);
      setPlayingDescription('');
    }else{
      setPlaying(true);
      setPlayingDescription('Transmitindo...');
    }
  }

  sliderValueChange = value => {
    const newVolume = value.toFixed(2);
    setSliderValue(parseFloat(newVolume));
    setVolume(parseFloat(newVolume));
  }

  return (
    <View>
      <Button onPress={() => { playPause(playing) }}>
        <PlayerImg source={playing ? imgPause : imgPlay} />
        <Text>{playingDescription}</Text>
      </Button>

      <VolumeContainer>
        <VolumeImg source={imgVolume} />
        <Slider
          style={{width: "90%", height: 40, }}
          maximumValue={1.0}
          minimumValue={0}
          step={0.01}
          value={sliderValue}
          onValueChange={value => sliderValueChange( value )}
          minimumTrackTintColor="#42bbe7"
          maximumTrackTintColor="#FFFFFF"
        />
      </VolumeContainer>

      <Video 
        source={{uri: streamingUrl}}
        ref={(ref) => {
          this.player = ref
        }}
        onBuffer={this.onBuffer}
        onError={this.videoError}
        paused={!playing}
        audioOnly={true}
        playInBackground={true}
        volume={volume}
      />
    </View>
  );
}

export default PlayerStreaming;