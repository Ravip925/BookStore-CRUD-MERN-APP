import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import Footer from "../Footer";
import Book from "./Book";
import "./book.css";

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
  );
};

export default Books;
