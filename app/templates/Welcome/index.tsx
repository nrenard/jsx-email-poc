import React from 'react';
import { Group, Button } from '@jsx-mail/components';
import styled from 'styled-components';

export default function Welcome({ paragraph }) {
  return (
    <Container>
      <Body>
        <h1>Hello, World</h1>
        <StyledParagraph>{paragraph}</StyledParagraph>

        <Button href='http://google.com.br'>Go</Button>
      </Body>
    </Container>
  );
}

const StyledParagraph = styled.p`
  font-size: 1.5em;
`;

const Container = styled(Group)`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px 100px;
  background-color: blue;
`;

const Body = styled(Group)`
  background-color: violet;
  padding: 20px;
`;