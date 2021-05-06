import itemActionTypes from'./item.types';

const INITIAL_STATE = {
  error: null,
  isFetching: false,
  foodItems: []
}

const itemReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case itemActionTypes.FETCH_FOOD_ITEMS_START:
      return {
        ...state,
        isFetching: true
      }
    case itemActionTypes.FETCH_FOOD_ITEMS_FAILURE:
      return {
        ...state,
        foodItems: [],
        error: action.payload,
        isFetching: false
      }
    case itemActionTypes.FETCH_FOOD_ITEMS_SUCCESS:
      return {
        ...state,
        foodItems: action.payload,
        error: null,
        isFetching: false
      }
    default:
      return state;
  }
}

export default itemReducer;