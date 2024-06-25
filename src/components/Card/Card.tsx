import { useProducts } from '../../context/CartContext';
import { ProductI } from '../../interfaces/product.interface';
import { CardBody, CardText, CardTitle } from './Card.styled';
import Counter from './Counter';

const Card = ({ product }: { product: ProductI }) => {
  const contextProduct = useProducts();

  //agrega item al carro
  const onAdd = (count: number) => {
    contextProduct.addList(product.id, product.name, count, product.price);
  };

  return (
    <CardBody>
      <CardTitle>{product.name}</CardTitle>
      <CardText>Amount: {product.amount}</CardText>
      <CardText>${product.price}</CardText>

      <Counter product={product} onAdd={onAdd} />
    </CardBody>
  );
};

export default Card;
