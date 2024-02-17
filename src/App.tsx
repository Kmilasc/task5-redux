import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BooksPage } from './pages/booksPage/BooksPage';
import { LoginPage } from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path='/home' element={<BooksPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
