import { Container } from 'react-bootstrap';
import { useProducts } from '../context/CartContext';
import { ProductI } from '../interfaces/product.interface';
import Card from './Card/Card';
import { ListCardWrapper } from './Card/Card.styled';

function ListItems() {
  const { products } = useProducts();

  return (
    <Container>
      <ListCardWrapper>
        {products.map((product: ProductI) => (
          <Card key={product.id} product={product} />
        ))}
      </ListCardWrapper>
    </Container>
  );
}

export default ListItems;
