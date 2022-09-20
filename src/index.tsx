import React from 'react';
import ReactDOM from 'react-dom/client';
import { routes } from './appRouter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  routes
);
