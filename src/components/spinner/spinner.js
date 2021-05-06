import React from 'react';

import { SpinnerOverlay, SpinnerContainer} from './spinner.styles';

const Spinner = WrappedComponent =>  {
  
  const WithSpinner = ({isLoading, ...otherProps}) => {
    return isLoading 
    ? ( <SpinnerOverlay><SpinnerContainer /></SpinnerOverlay> )
    : ( <WrappedComponent {...otherProps} /> )
  };

  return WithSpinner;
};

export default Spinner;