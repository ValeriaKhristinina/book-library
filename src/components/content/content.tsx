import './content.css';
import Book from '../book/book';

function Content() {
  return (
    <section className="content container">
      <section className="content-box">
        {[1, 2, 3, 4, 5, 6].map(item => {
          return <Book />
        })}

      </section>
      <button className="btn btn-mix">Mix Books</button>
    </section>
  )
}

export default Content;