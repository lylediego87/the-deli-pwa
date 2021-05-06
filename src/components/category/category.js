import React from 'react';
import { Link } from 'react-router-dom';

import {ImageDiv, Text} from './category.styles';

const CategoryItem = ({place, category, text}) => (
  <Link to={`/place/${place}/menu/${category}`}>
    <ImageDiv>
      <img src={`/${place}/${category}.jpeg`} alt='category'/>
      <Text><h5>{text}</h5></Text>
    </ImageDiv>
  </Link>
)

export default CategoryItem;