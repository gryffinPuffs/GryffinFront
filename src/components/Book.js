import { useNavigate, useHref } from "react-router-dom";

const Book = ({ book }) => {
  const navigate = useNavigate();
  const ref = useHref();

  return (
    <div>
      <button
        disabled={ref == "/admin"}
        onClick={() => {
          navigate(`/singleproduct/${book.id}`);
        }}
        className="bookInfo"
      >
        <img src={book.image_url} alt="book image" className="prodBooks"></img>
        <div className="admin-book-title">{book.name}</div>
        <div className="admin-book-title">Author: {book.author}</div>
      </button>
    </div>
  );
};
export default Book;
