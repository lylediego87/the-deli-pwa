import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './deli.styles';
import CategoryItem from '../../components/category/category';

import {ImageDiv, Text} from '../../components/category/category.styles';
import TestImg from '../../images/deli/chicken.jpeg';

const Deli = () => {
  const place = 'deli';
  return(
    <Container>
      <Link to={`#`}>
        <ImageDiv>
          <img src={TestImg} alt='category'/>
          <Text><h5>Test Item</h5></Text>
        </ImageDiv>
      </Link>
      <CategoryItem place={place} category='burger' text="Burgers" />
      <CategoryItem place={place} category='salad' text="Salads" />    
      <CategoryItem place={place} category='pizza' text="Pizza" />
      <CategoryItem place={place} category='chicken' text="Chicken" />
      <CategoryItem place={place} category='kids' text="Kids" />
    </Container>
  )
}

export default Deli;