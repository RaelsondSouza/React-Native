import api from '../services/api'

  import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Container, Logo, Imput, Button, Button2, ButtonText, ButtonText2 } from './styled';
import {DrawerActions, NavigationActions} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
import {state} from '../services/state'


  export default class Cadastro extends Component {

   /* handleEmailChange = (email) => {
        this.setState({email})
    }
    handlePasswordChange = (password) =>{
      this.setState({password})
    }
    handleLCadPress = () => {
      this.props.navigation.navigate('Cadastro')
    }
    handleLoginPress = async() =>{
      if(this.state.email.lenght ==0 || this.state.password.lenght ===0){
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
    state ={
          username: "",
          email: "",
          password: ""
    }
    handleLCad = async ()=>{
      
          try{
            await AsyncStorage.setItem('username', this.state.username),
            await AsyncStorage.setItem('email', this.state.email),
            await AsyncStorage.setItem('password', this.state.password)
            if( this.state.username =="" ||  this.state.email =="" ||  this.state.password==""){
              Alert.alert("Algum campo vazio, por favor preencer corretamente!")
            } else{
              Alert.alert(this.state.username +' cadastrado com sucesso!')
              this.props.navigation.navigate('Login')
              await AsyncStorage.setItem('username', ""),
              await AsyncStorage.setItem('email', ""),
              await AsyncStorage.setItem('password', "")

            }
            } catch(e){
              Alert.alert("Ops")
              }
          }
      
    render(){
      return(
        <Container>
          <Logo source={require("../../../src/logo2.png")}/>
          <Imput 
            placeholder="Nome completo"
           // value={this.state.username}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={val => this.setState({username:val})}
            
          ></Imput>
          <Imput 
            placeholder="Email"
           // value={this.state.email}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={val => this.setState({email:val})}
            
          ></Imput>
          <Imput 
            placeholder="Senha"
          //  value={this.state.password}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={val => this.setState({password:val})}

          ></Imput>
          
            <Button2
            onPress={this.handleLCad}>
              <ButtonText2>Cadastrar-se</ButtonText2>
          </Button2>
          
          
        </Container>
      )
    }
  }


