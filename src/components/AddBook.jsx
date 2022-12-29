import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  })}
`;
const Wrapper = styled.div`
  margin-top: 30px;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  ${mobile({
    width: "80%",
  })}
`;

const AddBook = () => {
  const navigate = useNavigate();
  const [inputs, setInput] = useState({
    name: "",
    auther: "",
    description: "",
    price: "",
    image: "",
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendRequest = async () => {
    await publicRequest
      .post("/books", {
        name: String(inputs.name),
        auther: String(inputs.auther),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate("/books"));
  };
  return (
    <Container>
      <Wrapper>
        <form
          style={{ width: "100%", backgroundColor: "white", padding: "15px" }}
          onSubmit={handleSubmit}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={10}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              size="small"
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Auther</FormLabel>
            <TextField
              size="small"
              value={inputs.auther}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="auther"
            />
            <FormLabel>Description</FormLabel>
            <TextField
              size="small"
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <FormLabel>Price</FormLabel>
            <TextField
              size="small"
              value={inputs.price}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />
            <FormLabel>Image URL</FormLabel>
            <TextField
              size="small"
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Available In Stock"
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: "15px", mb: "50px" }}
            >
              Add Book
            </Button>
          </Box>
        </form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default AddBook;
