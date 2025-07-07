import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const name = "John Doe";


const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const element = <h1>Hello, {formatName(user)}!</h1>;
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


