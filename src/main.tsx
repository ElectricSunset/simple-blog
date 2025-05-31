import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import Login from './page/Login.tsx';
import App from './App.tsx';
import Login from './page/Login.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
    {/* <p className='bg-primary-300 font-black'>LASDASDQWE</p> */}
    {/* <App /> */}
  </StrictMode>
);
