import React from 'react'
import { connect } from 'react-redux';

import { Container, HeaderContainer, LogoContainer, Logo, HeaderMenu, MenuLink} from './header.styles';
import logo from '../../images/EoA_Logo_white.png';
import UserDisplay from '../user-display/user-display';
import { selectMenuToggle } from '../../redux/app/app.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { toggleHeaderMenu } from '../../redux/app/app.actions';

const Header = ({menuToggle, currentUser, signOut, toggleMenu}) => (
  <Container>
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <UserDisplay />
    </HeaderContainer>
    { menuToggle ? 
      <HeaderMenu> 
        <MenuLink to="/my-orders" onClick={() => toggleMenu()}>My Orders</MenuLink>
        <MenuLink to="/about" onClick={() => toggleMenu()}>About</MenuLink>
        {currentUser ? 
          <MenuLink to="#" onClick={
            () => {
              signOut();
              toggleMenu();
            }} >Sign Out</MenuLink> 
        : <MenuLink to="/sign-in" onClick={() => toggleMenu()}>Sign In</MenuLink>}
      </HeaderMenu>
      : null
    }
  </Container>
);

const mapStateToProps = state => ({
  menuToggle: selectMenuToggle(state),
  currentUser : selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart()),
  toggleMenu: () => dispatch(toggleHeaderMenu())
})

 export default connect(mapStateToProps, mapDispatchToProps)(Header);