import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({headerTitle, buttonTitle, onSubmit, errorMessage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return(
    <>
      <Spacer>
      <Text h3>{headerTitle}</Text>
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

      {errorMessage ? <Text style= {styles.errorMessage}>{errorMessage}</Text> : null}

      <Spacer>
      <Button title= {buttonTitle} onPress={() => onSubmit({email, password})} />
      </Spacer>
    </>
    );

}

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        fontSize: 16,
        marginLeft: 15,
        marginTop: 15
    },

})

export default AuthForm;