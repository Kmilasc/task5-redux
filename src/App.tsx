import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BooksPage } from './pages/booksPage/BooksPage';
import { LoginPage } from './pages/login/Login';
import { RegisterPage } from './pages/register/RegisterPage';
import { PrivateArea } from './layout/PrivateArea';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route path='/' element={<PrivateArea />}>
          <Route path='home' element={<BooksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
