import './book.css';

function Book() {
  return (
    <article className="book">
      <div className="book__cover"></div>
      <h2 className="book__title">Title</h2>
      <h3 className="book__author">Author</h3>
    </article>
  )
}

export default Book;