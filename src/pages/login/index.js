

import api from '../services/api'

  import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Container, Logo, Imput, Button, Button2, ButtonText, ButtonText2 } from './styled';
import {DrawerActions, NavigationActions} from '@react-navigation/native'
import Cadastro from '../cadastro'
import AsyncStorage from '@react-native-community/async-storage';


  export default class Login extends Component {

    state ={
      email: "",
      password: ""
}
handleLoginPress = async ()=>{
      
      try{
        await AsyncStorage.setItem('email', this.state.email),
        await AsyncStorage.setItem('email', this.state.password)
        if( this.state.email =="" ||  this.state.password =="" ){
          Alert.alert("Algum campo vazio, por favor preencer corretamente!")
        } else{
          this.props.navigation.navigate('PaginaIncial')
        }
        } catch(e){
          Alert.alert("Ops algo deu errado, tente novamente!")
          }
      }

    handleLCadPress = () => {
      this.props.navigation.navigate('Cadastro')
    }
    /*handleLoginPress = async() =>{
      if(this.state.email.lenght ===0 || this.state.password.lenght ===0){
        this.setState({error: 'Usuário ou Senha em branco, por favor preencha os campos para Login!'})
      } else{
        const response = await api.post('token', {
          email: this.state.email,
          password: this.state.password
        })
        await AsyncStorage.setItem('@iMob.token', response.data.token)

        const resetAct = DrawerActions.reser({
          index: 0,
          actions: [
            NavigationActions.navigate({routName})
          ]
        })

      }
    }*/


    render(){
      return(
        <Container>
          <Logo source={require("../../../src/log.png")}/>
          <Imput 
            placeholder="Email"
           // value={this.state.email||""}
            toCapitalize='none'
            autoCorrect={false}
            onChangeText={val => this.setState({email:val})}
            
          ></Imput>
          <Imput 
            placeholder="Senha"
            //value={this.state.password||""}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={val => this.setState({password:val})}

          ></Imput>
          
          <Button
            onPress={this.handleLoginPress}>
              <ButtonText>Fazer Login</ButtonText>
          </Button>
            <Button2
            onPress={this.handleLCadPress}>
              <ButtonText2>Cadastrar-se</ButtonText2>
          </Button2>
          
        </Container>
      )
    }
  }


