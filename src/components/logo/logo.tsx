import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './logo.css';

function Logo(): JSX.Element {
  return (
    <Link to={AppRoute.Root}>
      <div className="logo">
        <img src="https://img.icons8.com/doodle/96/000000/books.png" alt="logo" />
      </div>
    </Link>
  )
}

export default Logo;