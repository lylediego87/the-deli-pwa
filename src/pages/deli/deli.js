import React from 'react';

import { Container } from './deli.styles';
import CategoryItem from '../../components/category/category';

const Deli = () => {
  const place = 'deli';
  return(
    <Container>
      <CategoryItem place={place} category='burger' text="Burgers" />
      <CategoryItem place={place} category='salad' text="Salads" />    
      <CategoryItem place={place} category='pizza' text="Pizza" />
      <CategoryItem place={place} category='chicken' text="Chicken" />
      <CategoryItem place={place} category='kids' text="Kids" />
    </Container>
  )
}

export default Deli;