import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserDetails from './UserDetails';
import Contacts from './Contacts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <UserDetails />
    <Contacts />
  </React.StrictMode>
);


