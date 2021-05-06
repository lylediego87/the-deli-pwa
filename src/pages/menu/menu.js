import React from 'react';
import { connect } from 'react-redux';
import { Container } from './menu.styles';

import { selectFoodItems } from '../../redux/item/item.selectors';
import MenuItem from '../../components/menu-item/menu-item';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

const Menu = ({match, foodItems}) => {
  const place = match.params.place;
  const category = match.params.category;
  const items = foodItems.filter(item => item.place === place && item.category === category);

  return(
    <>
      <Breadcrumbs place={place} category={category}/>
      <Container>
        { 
          items.map(item =>
          <MenuItem item={item} key={item.id} />
          )
        }
      </Container>
    </>
  )
}

const mapStateToProps = state => ({
  foodItems: selectFoodItems(state)
});

export default connect(mapStateToProps,null)(Menu);