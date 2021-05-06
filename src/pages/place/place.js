import React from 'react';
import { Route } from 'react-router-dom';

import Deli from '../deli/deli';
import Greens from '../greens/greens';

const Place = ({match}) => {
  return(
    <>
      <Route exact path='/place/deli' component={Deli} />
      <Route exact path='/place/greens' component={Greens} />
    </>
  )
}

export default Place;