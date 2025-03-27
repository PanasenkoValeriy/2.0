import PropTypes from 'prop-types';
import { Card , CardQuantity} from './CardItem.styled';

export const CardItem = ({ item }) => {
    const total = item.quantity * item.price;

    return (
        <Card>
            <p>{item.name}</p>
            <p>{item.price}$</p>

            <CardQuantity>
                <button>-</button>
                <p>{item.quantity}</p>
                <button>+</button>
            </CardQuantity>

            <p>{total}$</p>
            <button>x</button>
        </Card>
    )
};

CardItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }),
};