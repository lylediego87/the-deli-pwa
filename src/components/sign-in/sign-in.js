import React from 'react';
import { connect } from 'react-redux';

import { Container, GoogleButton, FacebookButton } from './sign-in.styles';
import { googleSignInStart, facebookSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ signInWithGoogle, signInWithFacebook }) => {
  

  return(
    <Container>
      <GoogleButton onClick={signInWithGoogle}>Sign In With Google</GoogleButton>
      <FacebookButton onClick={signInWithFacebook} >Sign In With Facebook</FacebookButton>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithFacebook: () => dispatch(facebookSignInStart())
});

export default connect(null,mapDispatchToProps)(SignIn);

