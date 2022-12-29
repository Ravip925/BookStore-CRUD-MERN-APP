import { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";
import { mobile } from "../../responsive";
import Footer from "../Footer";
import Book from "./Book";
import "./book.css";

const Spinner = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 40%;
  left: 47%;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ${mobile({ left:"43%" })}
`;

const fetchHandler = async () => {
  return await publicRequest.get("/books").then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  return (
    <>
      {books ? (
        <>
          <div className="main">
            <ul>
              {books &&
                books.map((book, index) => (
                  <li key={index}>
                    <Book book={book} />
                  </li>
                ))}
            </ul>
          </div>
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Books;
