import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserDetails from './UserDetails';
import Contacts from './Contacts';
import InputLabel from './InputLabel';
import Input from './Input';
import Form from './FormAddDelete';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <UserDetails />
    <Contacts />
    <Input/>
    <InputLabel />
    <Form />
  </React.StrictMode>
);


