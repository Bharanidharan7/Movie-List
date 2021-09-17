import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addMovie, fetchMovies } from './actions/movies';
import { setTextFilter } from './actions/filters';
import getVisibleMovies from './selectors/movies';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Axios from 'axios';
const store = configureStore();
store.dispatch(fetchMovies())
const state = store.getState();

const visibleMovies = getVisibleMovies(state.movies, state.filters);
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
