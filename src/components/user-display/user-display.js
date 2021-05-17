import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Container,ImageDiv, StyledMdAccountCircle } from './user-dipslay.styles';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { toggleHeaderMenu } from '../../redux/app/app.actions';

const UserDisplay = ({user, toggleHeaderMenu,history}) => {

  return(
    <Container> 
      <ImageDiv onClick={() => toggleHeaderMenu()}>      
        { user ? <img src={user.photoUrl} alt='user'/>  : <StyledMdAccountCircle size={55} /> }
      </ImageDiv>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleHeaderMenu: () => dispatch(toggleHeaderMenu())
});

const mapStateToProps = state => ({
  user: selectCurrentUser(state)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDisplay));