import { ProductI } from '../../interfaces/product.interface';
import { CardBody, CardText, CardTitle } from './Card.styled';
import Counter from './Counter';

const Card = ({ product }: { product: ProductI }) => {
  return (
    <CardBody>
      <CardTitle>{product.name}</CardTitle>
      <CardText>Amount: {product.amount}</CardText>
      <CardText>${product.price}</CardText>

      <Counter product={product} />
    </CardBody>
  );
};

export default Card;
