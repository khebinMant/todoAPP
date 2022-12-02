import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TodoMainPage } from './pages/TodoMainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoMainPage/>
  </React.StrictMode>
);


