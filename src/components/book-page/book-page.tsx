import './book-page.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import BookItem from '../book-item/book-item';
import { fakeBooks } from '../../utils/mocks';

function BookPage(): JSX.Element {
  return (
    <>
      <Header />
      <section className="book-page container">
        <div className="book-page__cover"></div>
        <div className="book-page__info">
          <h2 className="book-page__title">Tittle</h2>
          <h3 className="book-page__author">Author</h3>
          <p className="book-page__description">description book</p>
        </div>
      </section>
      <div className="books-list">
        {fakeBooks.map(item => {
          return <BookItem book={item} key={`${item.title}+${item.id}`} />
        })}
      </div>
      <Footer />
    </>
  )
}

export default BookPage;