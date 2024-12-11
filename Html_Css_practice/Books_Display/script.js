const container = document.getElementById("bookCards");

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
  }
];

// Generate cards and append them to the container
sampleCards.forEach((book) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const content = `
    <div class="card-header">
      <img src="${book.image}" class="cardImage" alt="${book.title}">
    </div>
    <div class="card-body">
      <h5>${book.title}</h5>
      <p>by ${book.author}</p>
      <div class="card-price">$${book.price} USD</div>
      <button class="view-button">View Product</button>
    </div>
  `;

  card.innerHTML = content;
  container.appendChild(card); // Append each card to the container
});
