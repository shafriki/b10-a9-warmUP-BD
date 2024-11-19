import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes.jsx';
import React from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './providers/AuthProvider.jsx';

AOS.init();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  </React.StrictMode>
);
