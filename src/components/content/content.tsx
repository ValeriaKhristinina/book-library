import './content.css';
import BookItem from '../book-item/book-item';
import { fakeBooks } from '../../utils/mocks';

function Content() {
  return (
    <section className="content container">
      <section className="content-box">
        {fakeBooks.map(item => {
          return <BookItem book={item} />
        })}

      </section>
      <button className="btn btn-mix">Mix Books</button>
    </section>
  )
}

export default Content;