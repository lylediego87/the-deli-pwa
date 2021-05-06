import { createSelector } from 'reselect';  

const selectItem = state => state.item;

export const selectFoodItems = createSelector(
  [selectItem],
  (item) => item.foodItems
);

export const selectIsFoodItemsFetching = createSelector(
  [selectItem],
  (item) => item.isFetching
);