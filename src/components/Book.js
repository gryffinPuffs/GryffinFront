import { useNavigate, useHref, Link } from "react-router-dom";
import wishList from "./wishlist.png";

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
        <div id="admin-book-title">{book.name}</div>

        {/* <Link id="wishlist">
          <div className="wishListText" data-hover="Add to favorites">
            <img id="wishlistImg" src={wishList} alt="Wishlist"></img>
          </div>
        </Link> */}
        {/* <div className="title">{book.name}</div>
        <div className="author">Author: {book.author}</div> */}
      </button>
    </div>
  );
};
export default Book;
