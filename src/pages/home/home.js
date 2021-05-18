import React from 'react';
import { Link } from 'react-router-dom'

import {Container, ImageDiv} from './home.styles';
import GreensImgUrl from '../../images/The-Greens-Logo-480x341.png';
import DeliImgUrl from '../../images/TheDeli-black-600x200px.png';

const HomePage = () => (
  <Container exit={{ opacity: 0 }}>
    <Link to="/place/deli">
      <ImageDiv style={{ backgroundImage: `url(${DeliImgUrl})`}}/>
    </Link>
    <Link to='/place/greens'>
      <ImageDiv style={{ backgroundImage: `url(${GreensImgUrl})`}}/>
    </Link>
  </Container>
)

export default HomePage;