import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome'
Icon.loadFont();


const Welcome = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/images/about.jpg')} style={styles.container}>
      <View style={styles.overlayBackground}>
        <View style={styles.containerLogo}>
          <Text style={styles.textLogoHard}>HARD</Text>
          <Text style={styles.textLogoTrain}>TRAIN</Text>
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.title}>BEM VINDO</Text>
          <Text style={styles.description}>treinar e viver uma nova experiência</Text>
          <Text style={styles.description}>se exercitando em casa.</Text>
        </View>

        <View style={styles.containerForm}>
          <TouchableOpacity style={styles.buttonTry} onPress={()=> navigation.navigate('About')}>
            <Text style={styles.textButtonTry}>Começe Agora</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonLogin} onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.textButtonLogin}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>


    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  overlayBackground: {
    flex: 1,
    backgroundColor: 'rgba(3,7,30, .4)'
  },

  textLogoHard: {
    color: '#FFF',
    fontSize: 32,
    marginLeft: 5,
    marginRight: 5
    
  },
  textLogoTrain: {
    color: '#F48C06',
    fontSize: 32,
    marginRight: 5,
    marginLeft: 5

  },
  containerLogo: {
    alignSelf: 'center',
    paddingVertical: 40,
    flexDirection: 'row'

  },

  title: {
    color: '#FFF',
    fontSize: 35,
    fontWeight: 'bold',

  },
  description: {
    color: '#FFF',
    fontSize: 15,
  },
  containerDescription: {
    paddingLeft: 25,
    marginTop: '45%',
    marginBottom: 20
  },

  containerForm: {
    paddingVertical: 60,
    alignSelf: 'center',

  },
  buttonTry:{
    borderWidth: 2,
    borderColor: '#F48C06',
    backgroundColor: '#F48C06',
    alignItems: 'center',
    borderRadius: 30,
    padding: 12,
    marginBottom: 20
  },
  textButtonTry:{
    fontSize: 20,
    color: '#FFF',
    marginLeft: 50,
    marginRight: 50
  },
  buttonLogin:{
    borderWidth: 2,
    borderColor: '#F48C06',
    alignItems: 'center',
    borderRadius: 30,
    padding: 12,
    marginBottom: 20
  },
  textButtonLogin:{
    fontSize: 20,
    color: '#F48C06',
    marginLeft: 50,
    marginRight: 50
  },



});


export default Welcome;