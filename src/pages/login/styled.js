import styled from 'styled-components'
const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    backgroundColor: #1C1C1C;
`
const Logo = styled.Image`
    height: 30%;
    
    margin-bottom: 20px;
    width: 200px;
`
const Imput = styled.TextInput`
    paddingHorizontal:20px;
    paddingVertical: 15px;
    border-radius: 50px;
    backgroundColor: #fff;
    alignSelf: stretch;
    margin-bottom: 15px;
    margin-horizontal: 28px;
    font-size: 16px;
    `
const Button = styled.TouchableHighlight`
    padding: 20px;
    border-radius: 30px;
    backgroundColor: #0000FF;
    margin: 1px;
    margin-horizontal: 20px;
    width: 180px;
    justify-content: center;
    right: 85px


    
`
const ButtonText = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
`
const Button2 = styled.TouchableHighlight`
    padding: 21px;
    border-radius: 30px;
    backgroundColor: #fff;
    margin: -63px;
    margin-horizontal: 20px;
    width: 150px;
    justify-content: center;
    align-items: center;
    left: 100px


    
`
const ButtonText2 = styled.Text`
    color: #f0f;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
`



export { Container, Logo, Imput, Button, ButtonText, Button2, ButtonText2 };