import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 10vh;
  margin: 25px 0;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;
const Text = styled.h1`
  font-family: "open sans";
  font-size: 50px;
  font-weight: 700;
  ${mobile({ fontSize: "30px" })}
`;
const Title = () => {
  return (
    <Container>
      <Wrapper>
        <Text>WELCOME TO BOOK EXPRESS</Text>
      </Wrapper>
    </Container>
  );
};

export default Title;
