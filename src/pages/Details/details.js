import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';

import Icon from '@expo/vector-icons/MaterialIcons'
import Ratings from '../../components/ratingBar'
Icon.loadFont();


const Details = () => {

  return (
    <ImageBackground source={require('../../assets/images/barras.jpg')} style={styles.container}>
      <View style={styles.overlayBackground}>
        <View style={styles.containerUser}>

          <TouchableOpacity style={styles.buttonHours}>
            <Text style={styles.textHours}>3 Horas</Text>
            <Icon name='schedule' style={styles.iconHoras} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonClosed}>
            <Icon name='cancel' style={styles.iconClosed} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputRepeticoes}>
          <View style={styles.repeticoes}>

            <Text style={styles.textRepeticoes}> <Text style={{ color: '#F48C06' }}>16 </Text>Movimentos</Text>
            <Text style={styles.textRepeticoes}><Text style={{ color: '#F48C06' }}>12 </Text>séries</Text>
            <Text style={styles.textRepeticoes}><Text style={{ color: '#F48C06' }}>30 </Text>min</Text>

          </View>
        </View>
        <View style={styles.subTitle}>
          <Text style={styles.textSubTitle}>Treinos Avançados</Text>
          <View style={styles.ratings}>
            <Ratings />
          </View>
        </View>

        <View style={styles.feedBack}>

          <TouchableOpacity>
            <Text style={styles.textDescription}>Descrição</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textFeedBack}>FeedBack</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textRelated}>Relatos</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.textos}>
          <Text style={styles.textDesc}>
            s simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </Text>
        </View>
        
      </View>
      <View style={styles.containerTrains}>

      <View style={styles.buttons}>

          <TouchableOpacity style={styles.buttonTrain}>
            <Text style={styles.textButtonTrain}>Valor da Avaliação R$ 5,00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonTrainTransparente}>
            <Text style={styles.textButtonTrainTransparente}>Iniciar Demonstração</Text>
          </TouchableOpacity>

        </View>

      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
  },
  overlayBackground: {
    height: '90%',
    backgroundColor: 'rgba(3,7,30, .4)'
  },
  containerUser: {
    marginTop: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  buttonHours: {
    backgroundColor: '#F48C06',
    borderRadius: 25,
    marginLeft: 25
  },
  textHours: {
    fontSize: 20,
    marginLeft: 25,
    marginRight: 2,
    padding: 5,
    color: '#FFF',
    fontWeight: 'bold',

  },
  iconHoras: {
    position: 'absolute',
    fontSize: 22,
    color: '#FFF',
    marginTop: 8,
    marginLeft: 5
  },
  iconClosed: {
    fontSize: 30,
    color: '#F48C06',
    marginTop: 10,

  },
  buttonClosed: {
    marginRight: 35
  },

  inputRepeticoes: {
    padding: 30
  },
  repeticoes: {
    marginTop: '30%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    borderColor: '#F48C06',

  },

  textRepeticoes: {
    color: '#FFF',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10
  },
  containerTrains: {
    paddingVertical: 10,
    backgroundColor: 'rgba(3,7,30, .9)',
    
    
  },
  subTitle: {
    flex: 1,
    marginLeft: 35
  },
  textSubTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF'
  },
  ratings: {
    marginTop: 10,

  },
  feedBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  textDescription: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: 20,

  },
  textFeedBack: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: 35,

  },
  textRelated: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: 35,
    marginRight: 35
  },
  textos: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 20
  },
  textDesc: {
    fontSize: 12,
    color: '#FFF'
  },
  buttons: {
    
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTrain: {
    backgroundColor: '#F48C06',
    padding: 10,
    
    marginBottom: 12,
    marginLeft: 30,
    marginRight: 30
  },
  buttonTrainTransparente: {
    borderWidth: 1,
    borderColor: '#F48C06',
    padding: 10,
    marginBottom: 50

  },
  textButtonTrainTransparente: {
    fontSize: 20,
    color: '#F48C06',
    marginLeft: 25,
    marginRight: 25
  },
  textButtonTrain: {
    fontSize: 20,
    color: '#FFF'
  }








})

export default Details;