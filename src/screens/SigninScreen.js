import { StyleSheet, View } from 'react-native';
import React, {useContext} from 'react';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';


const SigninScreen = () => {
  const {state, signin} = useContext(Context);

  return (
   <View style = {styles.container}>
     <AuthForm
     headerTitle= 'Sign in to your Account'
     buttonTitle='Sign In'
     onSubmit= {signin}
     errorMessage= {state.errorMessage}

     />
     <NavLink
     linkText="Don't have an account? sign up"
     routeName='Signup'
     />
   </View>
  )
  
};

SigninScreen.navigationOptions = {
  headerShown: false,
};

export default SigninScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,
  },
});