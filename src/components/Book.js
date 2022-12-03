import { useNavigate } from "react-router-dom";

const Book = ({ book, setBookInfo }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          setBookInfo(book.id);
          navigate(`/singleproduct/${book.id}`);
        }}
        className="bookInfo"
      >
        <img
          src={book.image_url}
          alt="book image"
          className="prodBooks"
        ></img>
      </button>
      <div className="title">{book.name}</div>
      <div className="author">Author: {book.author}</div>
    </div>
  );
};
export default Book;
