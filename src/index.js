import React from 'react';
import ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import './assets/css/custom.scss'
import App from './App';
import store from './redux/store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

