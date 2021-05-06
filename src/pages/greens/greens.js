import React from 'react';

import { Container } from './greens.styles';
import CategoryItem from '../../components/category/category';

const Greens = () => {
  const place = 'greens';

  return(
    <Container>
      <CategoryItem place={place} category='pizza' text="Pizza" />
      <CategoryItem place={place} category='kids' text="Kids" />
    </Container>
  )
}

export default Greens;