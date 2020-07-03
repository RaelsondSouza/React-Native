/*import * as React from 'react';
import { Button, View, Text } from 'react-native';


function pInicial() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ola pagina inicial</Text>
      </View>
    );
  }
  export default  pInicial;*/

  
  import Cadastro, {state} from '../cadastro'
import React, { Component } from 'react';
import { View, Text } from 'react-native';

  export default class pInicial extends Component {
    render(){
      return(
        <Text h1>Pagina Inicial</Text>

      )
    }
  }