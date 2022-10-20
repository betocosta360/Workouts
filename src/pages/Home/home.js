import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Avatar } from '@rneui/themed';

import Icon from '@expo/vector-icons/FontAwesome'
Icon.loadFont();


const Home = ({navigation}) => {

  return (
    <ImageBackground source={require('../../assets/images/home_train.jpg')} style={styles.container}>
      <View style={styles.overlayBackground}>
        <View style={styles.containerUser}>
          <Text style={styles.textUserName}>Olá,</Text>
          <Text style={styles.textUserNameRight}>Beto</Text>
          <View style={styles.containerAvatar}>
            <Avatar
              size={50}
              rounded
              source={require('../../assets/images/avatar.jpg')}
            />
          </View>

        </View>
        <View style={styles.containerPlayer}>
          <Icon name='play-circle' style={styles.iconPlayer} />
        </View>

        <View style={styles.containerTrain}>
          <Text style={styles.textTrainFind}>Encontre</Text>
          <Text style={styles.textTrain}>o seu treino</Text>
          <Icon style={styles.filterIcon} name='filter' />
        </View>

        <View style={styles.containerSearch}>
          <TextInput
            style={styles.containerInput}
            placeholderTextColor='#FFF'
            placeholder='pesquise aqui seu exercicio' />
          <Icon name='search' style={styles.icon} />
        </View>
      </View>
      <View style={styles.containerTrains}>

        <View style={styles.containerExercicios}>

          <ScrollView showsHorizontalScrollIndicator={false}
            horizontal={true}>
            <TouchableOpacity style={styles.buttonPopular}>
              <Text style={{ color: '#FFF' }}>Popular</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonHard}>
              <Text style={{ color: '#FFF' }}>Treino Duro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonFull}>
              <Text style={{ color: '#FFF' }}>Todo o Corpo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCross}>
              <Text style={{ color: '#FFF' }}>CrossFit</Text>
            </TouchableOpacity>
          </ScrollView>

        </View>
        <View style={styles.containerPopWorkout}>
          <Text style={styles.textPopWorkout}>Mais Populares</Text>
        </View>

        <View style={styles.boxExercicios}>
          <ScrollView showsHorizontalScrollIndicator={false}
            horizontal={true}>
            <Image style={styles.imageBicepis} source={require('../../assets/images/bicepis.jpg')} resizeMode={'cover'} />
            <Image style={styles.imageBicepis} source={require('../../assets/images/terra.jpg')} resizeMode={'cover'} />
            <Image style={styles.imageBicepis} source={require('../../assets/images/ombro.jpg')} resizeMode={'cover'} />
            <Image style={styles.imageBicepis} source={require('../../assets/images/agachamento.jpg')} resizeMode={'cover'} />
            <Image style={styles.imageBicepis} source={require('../../assets/images/bicepis.jpg')} resizeMode={'cover'} />
          </ScrollView>

          <View style={styles.rodape}>
            <TouchableOpacity>
              <Icon name='bars' style={styles.iconRodape} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textRodape}>Treino</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textRodape}>Nível</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textRodape}>Pérfil</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
  },
  overlayBackground: {
    height: '80%',
    backgroundColor: 'rgba(3,7,30, .4)'
  },
  containerUser: {
    marginTop: '25%',
    flexDirection: 'row',

  },
  textUserName: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 25
  },
  textUserNameRight: {
    fontSize: 30,
    color: '#F48C06',
    fontWeight: 'bold',
    marginLeft: 5
  },
  containerAvatar: {
    marginLeft: '35%',
    borderColor: '#F48C06',
    borderRadius: 50,

  },
  containerPlayer: {
    marginTop: 45,
    alignItems: 'center',

  },
  iconPlayer: {
    fontSize: 73,
    color: '#F48C06',

  },
  containerTrain: {
    marginTop: 20,
    flexDirection: 'row'
  },
  textTrainFind: {
    fontSize: 20,
    color: '#F48C06',
    marginLeft: 25,
    fontWeight: 'bold'
  },
  textTrain: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: 5,
    fontWeight: 'bold'
  },
  filterIcon: {
    fontSize: 30,
    color: '#F48C06',
    marginLeft: '22%'
  },
  containerSearch: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerInput: {
    marginLeft: 26,
    paddingRight: 120,
    borderColor: '#F48C06',
    padding: 5,
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 10
  },
  icon: {
    marginTop: 16,
    position: 'absolute',
    fontSize: 25,
    color: '#F48C06',
    marginLeft: '80%'
  },
  containerTrains: {
    backgroundColor: 'rgba(3,7,30, .9)',
    paddingVertical: '40%',
  },
  containerExercicios: {
    marginTop: 10,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,

  },
  buttonPopular: {
    padding: 10,
    borderColor: '#F48C06',
    borderWidth: 2,
    borderRadius: 30,
    marginLeft: 20
  },
  buttonHard: {
    padding: 10,
    borderColor: '#F48C06',
    borderWidth: 2,
    borderRadius: 30,
    marginLeft: 20
  },
  buttonFull: {
    padding: 10,
    borderColor: '#F48C06',
    borderWidth: 2,
    borderRadius: 30,
    marginLeft: 20
  },
  buttonCross: {
    padding: 10,
    borderColor: '#F48C06',
    borderWidth: 2,
    borderRadius: 30,
    marginLeft: 20
  },

  containerPopWorkout: {
    position: 'absolute',
    marginTop: 55,
    marginLeft: 20
  },
  textPopWorkout: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold'
  },

  boxExercicios: {
    position: 'absolute',
    marginTop: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageBicepis: {
    width: 120,
    height: 100,
    borderRadius: 20,
    marginLeft: 20
  },
  rodape: {
    width: '100%',
    height: '30%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '50%',

  },

  textRodape: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15,
    color: '#FFF',
    padding: 5
  },
  iconRodape: {
    marginLeft: 18,
    fontSize: 25,
    color: '#FFF',
    padding: 5
  }









})

export default Home;