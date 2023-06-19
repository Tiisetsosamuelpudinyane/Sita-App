import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

const backgroundImage = require('../assets/p.jpg'); // Replace with the actual path to your image

const Hero = () => {
  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1, backgroundColor: '#444' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>With Love and Respect</Text>
        </View>
        <View>
          <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus porttitor dui.
          </Text>
          <Text style={{ fontSize: 18, color: 'white', textAlign: 'center', marginTop: 10 }}>
            Sim in vestibulum metus pulvinar sit amet.
          </Text>
        </View>
        <TouchableOpacity onPress={() => window.scrollTo({ behavior: 'smooth', top: Dimensions.get('window').height })}>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 32, color: 'white' }}>Scroll Down</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Hero;
