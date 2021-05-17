import { createSelector } from 'reselect';

const selectApp = state => state.app;

export const selectMenuToggle = createSelector(
  [selectApp], 
  app => app.headerMenuToggle
);