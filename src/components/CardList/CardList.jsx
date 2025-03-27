import propTypes from 'prop-types';
import { CardItem } from "components/CardItem/CardItem";

export const CardList = ({ items }) => <div>{items.map(item => (<CardItem item={item} key={item.id} />))}</div>;

CardList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};