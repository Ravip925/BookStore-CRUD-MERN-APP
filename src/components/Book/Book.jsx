import { Link, useNavigate } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import "./book.css";

const Book = (props) => {
  const { _id, name, auther, description, price, image } = props.book;
  const navigate = useNavigate();

  const handleDelete = async () => {
    await publicRequest
      .delete(`/books/${_id}`)
      .then((res) => res.data)
      .then(() => window.location.reload() && navigate("/"));
  };
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {auther}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <div className="btn">
        <Link to={`/books/${_id}`}>
          <button>Update</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Book;
