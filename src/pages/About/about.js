import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Image, FlatList, ScrollView, } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from '@expo/vector-icons/FontAwesome'
Icon.loadFont();


const About = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/images/about.jpg')} style={styles.container}>
      <View style={styles.overlayBackground}>
        <View style={styles.containerLogo}>
          <Text style={styles.textLogoHard}>HARD</Text>
          <Text style={styles.textLogoTrain}>TRAIN</Text>
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.title}>Sobre Você</Text>
          <Text style={styles.description}>queremos saber mais sobre você,</Text>
          <Text style={styles.description}>siga os próximos passos para completar</Text>
          <Text style={styles.description}>as informações.</Text>
        </View>

        <View style={styles.containerForm}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            <View style={styles.boxContainerInactive}>
              <View style={styles.containerCheckboxInteractive}>

                <BouncyCheckbox

                  size={20}
                  fillColor='#F48C06'
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: "red" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  textStyle={{ color: '#FFF' }}
                  onPress={() => { }} />

              </View>

              <Text style={styles.textButtonInactive}>Eu estou</Text>
              <Text style={styles.textButtonInactive}>inativo</Text>
              <Text style={{ fontSize: 12, color: '#FFF', marginLeft: 30 }}>eu nunca treinei</Text>
            </View>

            <View style={styles.boxContainerBeginner}>
              <View style={styles.containerCheckboxInteractive}>

                <BouncyCheckbox

                  size={20}
                  fillColor='#F48C06'
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: "red" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  textStyle={{ color: '#FFF' }}
                  onPress={() => { }} />

              </View>
              <Text style={styles.textButtonInactive}>Eu sou</Text>
              <Text style={styles.textButtonInactive}>principiante</Text>
              <Text style={{ fontSize: 12, color: '#FFF', marginLeft: 30 }}>treinei poucas vezes</Text>
            </View>
          </ScrollView>

        </View>

        <View style={styles.boxFooter}>
          <TouchableOpacity style={styles.buttonIntro} onPress={()=> navigation.navigate('Home')}>
            <Text style={styles.textIntro}>Pular Introdução</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonNext} onPress={()=> navigation.navigate('Details')}>
            <Text style={styles.textNext}>Próximo</Text>
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
  containerLogo: {
    paddingVertical: 50,
    flexDirection: 'row',
    alignSelf: 'center'


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

  },

  containerForm: {
    paddingVertical: 20,
    flexDirection: 'row',
    marginBottom: 25
  },
  boxContainerInactive: {

    backgroundColor: '#F48C06',
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 10

  },
  textButtonInactive: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 30,
    marginRight: 30
  },
  boxContainerBeginner: {

    backgroundColor: '#F48C06',
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 20
  },
  textButtonBeginner: {
    fontSize: 20,
    color: '#F48C06',
    marginLeft: 30,
    marginRight: 30
  },
  boxFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textIntro: {
    fontSize: 16,
    color: '#FFF',
    marginLeft: 10,
    marginLeft: 15,
    marginRight: 15
  },
  buttonNext: {
    alignItems: 'center',
    backgroundColor: '#F48C06',
    marginRight: 25,
    borderRadius: 4,
    marginLeft: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },
  buttonIntro: {
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',

  },
  textNext: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15
  },
  containerCheckboxInteractive: {
    flexDirection: 'row-reverse',

  },
  containerCheckboxBeginner: {
    flexDirection: 'row-reverse',

  },


});


export default About;