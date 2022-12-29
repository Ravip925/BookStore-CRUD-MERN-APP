import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Books from "./components/Book/Books";
import AddBook from "./components/AddBook";
import BookDetail from "./components/Book/BookDetail";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
