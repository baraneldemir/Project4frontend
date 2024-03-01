import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './interceptors/axios'
import App from './App';
import { PeopleProvider } from './contexts/PeopleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <PeopleProvider>
      <App />
    </PeopleProvider>
  </React.StrictMode>
);


