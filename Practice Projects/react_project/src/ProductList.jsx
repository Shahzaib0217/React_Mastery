import "./ProductList.css";

function ProductList() {
  // Sample card data for books
  const sampleCards = [
    {
      title: "Clean Code",
      author: "Robert Cecil Martin",
      price: 20,
      image: "https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg",
    },
    {
      title: "Clean Code",
      author: "Robert Cecil Martin",
      price: 20,
      image: "https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg",
    },
    {
      title: "Clean Code",
      author: "Robert Cecil Martin",
      price: 20,
      image: "https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg",
    },
    {
      title: "Clean Code",
      author: "Robert Cecil Martin",
      price: 20,
      image: "https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg",
    },
    {
      title: "Clean Code",
      author: "Robert Cecil Martin",
      price: 20,
      image: "https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg",
    },
    {
      title: "Clean Code",
      author: "Robert Cecil Martin",
      price: 20,
      image: "https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      price: 25,
      image: "https://m.media-amazon.com/images/I/41as+WafrFL.jpg",
    },
  ];

  return (
    <div className="container">
      <div id="bookCards">
        {sampleCards.map((book, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <img src={book.image} className="cardImage" alt={book.title} />
            </div>
            <div className="card-body">
              <h5>{book.title}</h5>
              <p>by {book.author}</p>
              <div className="card-price">${book.price} USD</div>
              <button className="view-button">View Product</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
