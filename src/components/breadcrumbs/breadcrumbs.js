import React from 'react';

import { Container, Place, Category } from './breadcrumbs.styles';

const Breadcrumbs = ({place, category}) => (
  <Container>
    <Place to={`/place/${place}/`}> { place } </Place>
    <Category>  /  { category }</Category>
  </Container>
)

export default Breadcrumbs;