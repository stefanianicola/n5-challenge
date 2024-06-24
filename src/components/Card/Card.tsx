import { ProductI } from '../../interfaces/product.interface';
import { CardBody, CardText, CardTitle } from './Card.styled';

function Card({ product }: { product: ProductI }) {
  return (
    <CardBody>
      <CardTitle>{product.name}</CardTitle>
      <CardText>{product.price}</CardText>
      <CardText>{product.amount}</CardText>
    </CardBody>
  );
}

export default Card;
