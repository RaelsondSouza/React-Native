/*const  stat ={
    username: "",
    email: "",
    password: ""
}



export default { stat };*/

import Cadastro from '../cadastro'
import React, { Component } from 'react';
import { View, Text } from 'react-native';

  export default class pInicial extends Component {
    render(){
      return(
      <Cadastro>{this.state.username}</Cadastro>
      )
    }
  }