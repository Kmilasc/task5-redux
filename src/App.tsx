import React from 'react';
import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BooksPage } from './pages/booksPage/BooksPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path='/home' element={<BooksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
