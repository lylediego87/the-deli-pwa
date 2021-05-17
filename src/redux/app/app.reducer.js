import appActionTypes from './app.types';

const INITIAL_STATE = {
  headerMenuToggle: false
}

const appReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case appActionTypes.TOGGLE_HEADER_MENU:
      return {
        ...state,
        headerMenuToggle: !state.headerMenuToggle
      }
    default:
      return {
        ...state
      }
  }
}

export default appReducer;