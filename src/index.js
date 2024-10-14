import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/scss/index.scss"
import router from './routes/router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

