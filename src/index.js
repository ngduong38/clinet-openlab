import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/scss/index.scss"
import router from './routes/router';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
 
);

