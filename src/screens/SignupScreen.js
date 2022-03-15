import { StyleSheet, View } from 'react-native';
import React, {useState, useContext} from 'react';
import { Button, Text, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext'


const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style ={styles.container}>
      <Spacer>
      <Text h3>SignupScreen</Text>
      </Spacer>
      <Input 
      label = "email" 
      value={email} 
      onChangeText={setEmail}
      autoCapitalize = "none"
      autoCorrect = {false}
      />       
      <Spacer/>
      <Input 
      label = "password" 
      value={password} 
      onChangeText={setPassword}
      autoCapitalize = "none"
      autoCorrect = {false}
      secureTextEntry

      />
      <Spacer/>
      <Spacer>
      <Button title= "Sign Up" onPress={() => signup({email, password})}/>
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = {
    headerShown: false,
};

export default SignupScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,

  }
});