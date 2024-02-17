import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BooksPage } from './pages/booksPage/BooksPage';
import { LoginPage } from './pages/login/Login';
import { RegisterPage } from './pages/register/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path='/home' element={<BooksPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
