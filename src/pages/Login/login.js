import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';

const Login = ({navigation}) => {

  return (
    <ImageBackground source={require('../../assets/images/login.png')} style={styles.container}>
      <View style={styles.overlayBackground}>
        <View style={styles.containerLogo}>
          <Text style={styles.textLogoHard}>HARD</Text>
          <Text style={styles.textLogoTrain}>TRAIN</Text>
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.title}>Faça seu Login</Text>
          <Text style={styles.description}>treinar e viver uma nova experiência</Text>
          <Text style={styles.description}>se exercitando em casa.</Text>
        </View>

        <View style={styles.containerForm}>
          <Text style={styles.textEmail}>E-mail</Text>
          <TextInput style={styles.inputEmail} placeholder='Digite seu e-mail...' />

          <Text style={styles.textPass}>Senha</Text>
          <TextInput style={styles.inputPass} placeholder='Digite sua senha...' />
        </View>

        <View style={styles.textos}>

          <TouchableOpacity>
            <Text style={styles.textForgoutPass}>
              Esqueçeu sua Senha?
            </Text>
          </TouchableOpacity>

        </View>

      </View>
      <View style={styles.containerTrains}>

        <View style={styles.buttons}>

          <TouchableOpacity style={styles.buttonLogin} onPress={()=> navigation.navigate('Home')}>
            <Text style={styles.textButtonLogin}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonTransparenteSignUp} onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.textButtonTrainTransparenteSignUp} onPress={()=> navigation.navigate('Welcome')}>Crie sua Conta</Text>
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
    marginTop: '20%',
    marginBottom: 20
  },

  containerForm: {
    marginLeft: 30
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

  textos: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'row-reverse',
    marginLeft: 30,
    marginRight: 20
  },
  textForgoutPass: {
    fontSize: 14,
    color: '#FFF',

  },
  buttons: {

    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLogin: {
    backgroundColor: '#F48C06',
    padding: 12,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30
  },
  buttonTransparenteSignUp: {
    borderWidth: 1,
    borderColor: '#F48C06',
    padding: 12,
    marginBottom: 5

  },
  textButtonTrainTransparenteSignUp: {
    fontSize: 20,
    color: '#F48C06',
    marginLeft: 25,
    marginRight: 25
  },
  textButtonLogin: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: 60,
    marginRight: 65
  },

  textEmail: {
    fontSize: 14,
    color: '#FFF'
  },
  textPass: {
    fontSize: 14,
    color: '#FFF'
  },
  inputEmail: {
    padding: 10,
    backgroundColor: 'rgba(232, 93, 4, 0.1)',
    marginRight: 30,
    borderRadius: 25
  },
  inputPass: {
    padding: 10,
    backgroundColor: 'rgba(232, 93, 4, 0.1)',
    marginRight: 30,
    borderRadius: 25
  },








})

export default Login;