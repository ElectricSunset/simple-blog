import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './page/Login.tsx';
import Register from './page/Register.tsx';
import Home from './page/Home.tsx';
// import Test from './page/Test.tsx';
import { Provider } from 'react-redux';
import { store } from './state/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
