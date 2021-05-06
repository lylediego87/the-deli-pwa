import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsFoodItemsFetching } from '../../redux/item/item.selectors';

import Spinner from '../../components/spinner/spinner';
import Menu from './menu';

const mapStateToProps = state => ({
  isLoading: selectIsFoodItemsFetching(state)
});

const MenuContainer = compose(connect(mapStateToProps), Spinner)(Menu);

export default MenuContainer;