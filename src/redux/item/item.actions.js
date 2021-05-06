import itemActionTypes from './item.types';

export const fetchFoodItemsStart = () => ({
  type: itemActionTypes.FETCH_FOOD_ITEMS_START
})

export const fetchFoodItemsSuccess = foodItemsMap => ({
  type: itemActionTypes.FETCH_FOOD_ITEMS_SUCCESS,
  payload: foodItemsMap
})

export const fetchFoodItemsFailure = error => ({
  type: itemActionTypes.FETCH_FOOD_ITEMS_FAILURE,
  payload: error
})

