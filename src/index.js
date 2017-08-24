import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';

import App from "./components/App";
import {todoList} from './components/ReduxReducers';

const store = createStore(todoList);

const render = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
)};

store.subscribe(render);
render();




