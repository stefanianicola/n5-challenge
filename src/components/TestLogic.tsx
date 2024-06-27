import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import { TextElement } from '../shared/GlobalStyle.styled';

function TestLogic() {
  const [palabra, setPalabra] = useState<string>('');
  const [createPalabra, setCreatePalabra] = useState<string>('');

  const reverse = (word: string) => {
    // Filtrar solo las letras y revertirlas
    const letters = word
      .split('')
      .filter((char) => /[a-zA-Z]/.test(char))
      .reverse();

    // Construir el resultado final
    let result = '';
    let letterIndex = 0;

    for (const char of word) {
      if (/[a-zA-Z]/.test(char)) {
        result += letters[letterIndex++];
      } else {
        result += char;
      }
    }

    setPalabra(result);
  };

  const handleCreateWord = (e: any) => {
    setCreatePalabra(e.target.value);
  };

  const handleRevert = (e: any) => {
    e.preventDefault();
    reverse(createPalabra);
    console.log(palabra);
  };

  return (
    <Container className="my-5">
      <Form onSubmit={handleRevert}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Word</Form.Label>
          <Form.Control
            type="text"
            name="word"
            placeholder="Inserte una palabra"
            onChange={handleCreateWord}
          />
        </Form.Group>
        <Button as="input" type="submit" value="Agregar" />
      </Form>
      <TextElement className="my-5">
        Revert Word: <strong>{palabra}</strong>
      </TextElement>
    </Container>
  );
}

export default TestLogic;
