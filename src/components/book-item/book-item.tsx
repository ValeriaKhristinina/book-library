import './book-item.css';
import { Book } from '../../types/book'

type BookProps = {
  book: Book
}

function BookItem({ book }: BookProps) {
  const { title, author, cover, id } = book
  return (
    <article className="book">
      <div className="book__cover">
        <img src={cover} alt={`${title}+${id}`} />
      </div>
      <h2 className="book__title">{title}</h2>
      <h3 className="book__author">{author}</h3>
    </article>
  )
}

export default BookItem;