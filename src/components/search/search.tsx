import { useState } from 'react';
import './search.css';

function Search(): JSX.Element {
  const [formActive, setFormActive] = useState(false)
  return (
    <section className="search">
      {!formActive && (
        <div onClick={() => { setFormActive(true) }} className="search__icon">
          <img src="https://img.icons8.com/doodle/48/000000/search--v1.png" alt="search-icon" />
        </div>
      )}

      {formActive && (
        <form action="" className="search-form">
          <input className="search-form__input" type="text" autoFocus />
          <div onClick={() => { setFormActive(false) }} className="search-form__close">
            <img src="https://img.icons8.com/metro/26/000000/delete-sign.png" alt="close" />
          </div>
        </form>
      )

      }

    </section>
  )
}

export default Search;