import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Title>Hello, World!</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0px;
`;

const Title = styled.h1`
  font-size: 420px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default App;
