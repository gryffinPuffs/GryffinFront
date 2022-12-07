import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts, deleteProduct } from "./components/api-adapter";
import Book from "./components/Book";
import EditForm from "./EditForm";
import "./components/admin.css";

const AdminBooks = ({ allBooks, setAllBooks }) => {
  const navigate = useNavigate();
  const [editId, setEditId] = useState();
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    async function fetchAllBooks() {
      const allTheBooks = await getAllProducts();
      setAllBooks(allTheBooks);
    }
    fetchAllBooks();
  }, []);
  function handleChooseEdit(e) {
    setEditId(e.target.id);
    setUpdate(true);
  }
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   try {
  //     const newProduct = await createProduct(
  //       name,
  //       price,
  //       image_url,
  //       image_url2,
  //       author,
  //       description,
  //       audience
  //     );
  //     setAllBooks([newProduct, ...allBooks]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  //admin access only - delete single product
  async function handleDeleteAdmin(e) {
    e.preventDefault();
    const bookId = e.target.id;
    const destroyedProduct = await deleteProduct(bookId);
    console.log("ITS DESTROY PRODUCT", destroyedProduct);
    const availableProducts = allBooks.filter((product) => {
      console.log(product, "THIS IS PRODUCT");
      return product.id !== destroyedProduct.id;
    });
    setAllBooks([availableProducts, ...allBooks]);
    navigate("/allbooks");
  }

  return (
    <div id="allBooks">
      <div className="admin-header">
        <div>
          {" "}
          <h1 className="admin-header">Wizards welcomed, muggles tolerated.</h1>
        </div>
        <div>
          <h3 className="admin-header">
            Here you will find our current product inventory. As an
            administrator, you may create, edit, and remove books.
          </h3>
        </div>
      </div>
      <button
        className="admin-button-create"
        onClick={() => {
          navigate("/makeproduct");
        }}
      >
        New Product
      </button>

      <div id="books">
        {allBooks && allBooks.length
          ? allBooks.map((book) => {
              return (
                <div key={`adminbooks-${book.id}`}>
                  <Book book={book} />
                  <button
                    className="admin-buttons"
                    id={book.id}
                    onClick={handleDeleteAdmin}
                  >
                    Delete Book
                  </button>
                  <button
                    className="admin-buttons"
                    id={book.id}
                    onClick={handleChooseEdit}
                  >
                    Edit Book
                  </button>

                  {update && book.id == editId ? (
                    <EditForm
                      book={book}
                      setUpdate={setUpdate}
                      allBooks={allBooks}
                      setAllBooks={setAllBooks}
                    ></EditForm>
                  ) : null}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AdminBooks;

/*async function handleSubmit(e) {
    e.preventDefault();
    console.log("banana");
    setName(book.name);
    setAuthor(book.author);
    setAudience(book.audience);
    setDescription(book.description);
    setImage(book.image_url);
    setImage2(book.image_url2);
    setPrice(book.price);
    setUpdate(true);
  } */
