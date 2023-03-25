import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';

const Login = () => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    function handleRegister(){

    }
    function handleLogin(){
        
    }

  return (
    <View style={{borderWidth:0,flex:1,justifyContent:"center",alignItems:"center"}}>
        <View style={{borderWidth:0,width:"90%"}}>
            <Text>Enter Email</Text>
   <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      </View >
      <View style={{borderWidth:0,width:"90%"}}>
      <Text>Enter Password</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
      />
      </View>
      <View style={{}}>
      <Button
        title="Login"
        onPress={() => handleLogin()}
      />
      <View style={{height:10}}></View>
       <Button
        title="Register"
        onPress={() => handleRegister()}
      />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius:5,
        padding: 10,
        width:"90%"
      },
})