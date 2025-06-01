import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Login from './page/Login.tsx';
// import Test from './page/Test.tsx';
import { Provider } from 'react-redux';
import { store } from './state/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Login />
      {/* <Test /> */}
    </Provider>
  </StrictMode>
);
