import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';
import BookPage from '../book-page/book-page';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage />} ></Route>
      <Route path={AppRoute.Book} element={<BookPage />}></Route>
    </Routes>
  );
}

export default App;
