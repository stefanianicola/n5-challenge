import { Container, Spinner } from 'react-bootstrap';
import { useProducts } from '../context/CartContext';
import { ProductI } from '../interfaces/product.interface';
import Card from './Card/Card';
import { ListCardWrapper } from './Card/Card.styled';
import { styled } from 'styled-components';

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem auto;
`;

function ListItems() {
  const { products } = useProducts();

  return (
    <Container>
      {products.length > 0 ? (
        <ListCardWrapper>
          {products.map((product: ProductI) => (
            <Card key={product.id} product={product} />
          ))}
        </ListCardWrapper>
      ) : (
        <SpinnerWrapper>
          <Spinner animation="border" variant="secondary" />
        </SpinnerWrapper>
      )}
    </Container>
  );
}

export default ListItems;
