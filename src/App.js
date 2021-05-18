import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import { AnimatePresence } from "framer-motion";

import { GlobalStyles,AppContainer } from './global.styles';
import Header from './components/header/header';
import FooterNav from './components/footer-navigation/footer.navigation';
import NotificationsContainer from './components/notification-container/notication-container.component';

import HomePage from './pages/home/home';
import Place from './pages/place/place';
import SignIn from './components/sign-in/sign-in';
import MenuContainer from './pages/menu/menu.container';
import Cart from './pages/cart/cart';
import Checkout from './pages/checkout/checkout';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { fetchFoodItemsStart } from './redux/item/item.actions';

const App = ({checkSession,currentUser, fetchFoodItems}) => {
  const location = useLocation();
  useEffect(() => {
    checkSession();
    fetchFoodItems();
  }, [checkSession,fetchFoodItems])

  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <NotificationsContainer />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/place/:place' component={Place} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' render={() => currentUser ? <Checkout/> : <SignIn/> }/>
          <Route exact path='/place/:place/menu/:category' component={MenuContainer} />
          <Route exact path='/sign-in' render={() => currentUser ? <Redirect to='/'/> : <SignIn/> } />
        </Switch>
      </AnimatePresence>
      <FooterNav />
    </AppContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  checkSession: () => dispatch(checkUserSession()),
  fetchFoodItems: () => dispatch(fetchFoodItemsStart())
});

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

/* */