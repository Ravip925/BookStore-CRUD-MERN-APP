import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 70vh;
  background-color: #fffbec;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "0px",
  })}
`;

const Left = styled.div`
  border: 5px solid #01d0ff;
  border-radius: 10px;
  flex: 1;
  background-image: url("https://i.ibb.co/CHMQ6PF/Book.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.h1`
  text-align: center;
  font-family: "Open Sans";
  font-weight: 800;
  margin: 15px 0;
`;
const Button = styled.button`
  width: 100%;
  align-items: center;
  margin: 15px 0;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  &:active,
  &:hover {
    outline: 0;
  }
  &:hover Span {
    background: none;
  }
`;
const Span = styled.span`
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  font-weight: bold;
  width: 100%;
  height: 100%;
  transition: 300ms;
`;

const HomeBody = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left></Left>
          <Right>
            <TextContainer>
              <Text>EXPLORE ALL THE BOOKS</Text>
              <NavLink to="/books" style={{ width: "100%" }}>
                <Button>
                  <Span className="text">Explore</Span>
                </Button>
              </NavLink>
            </TextContainer>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default HomeBody;
