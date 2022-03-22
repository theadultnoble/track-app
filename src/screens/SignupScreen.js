import { StyleSheet, View } from 'react-native';
import React, {useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignupScreen = () => {
  const {state, signup} = useContext(AuthContext);


  return (
    <View style ={styles.container}>
      <AuthForm
        headerTitle='Signup for Tracker'
        buttonTitle = 'Sign up'
        onSubmit={signup}
        errorMessage={state.errorMessage}
      />
      <NavLink
      linkText= 'Already have an account? Sign in'
      routeName='Signin'
      />

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
  },
});