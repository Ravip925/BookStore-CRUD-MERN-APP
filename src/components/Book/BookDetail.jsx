import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { publicRequest } from "../../requestMethods";

const BookDetail = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const fetchHandler = async () => {
      await publicRequest
        .get(`/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await publicRequest
      .put(`/books/${id}`, {
        name: String(inputs.name),
        auther: String(inputs.auther),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate("/books"));
  };

  return (
    <>
      {inputs && (
        <form onSubmit={handleSubmit}>
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
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Auther</FormLabel>
            <TextField
              value={inputs.auther}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="auther"
            />
            <FormLabel>Description</FormLabel>
            <TextField
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <FormLabel>Price</FormLabel>
            <TextField
              value={inputs.price}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />
            <FormLabel>Image</FormLabel>
            <TextField
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
              label="Available"
            />
            <Button variant="contained" type="submit" sx={{ mt: "15px" }}>
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </>
  );
};

export default BookDetail;
