import {compose,applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const preloadedState = {};
const middleware = [thunk];

let store;

if (window.navigator.userAgent.includes("Chrome")) {
    store = createStore(
        rootReducer,
        preloadedState,
        compose(applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    
} else {
    store = createStore(
        rootReducer,
        preloadedState,
        compose(applyMiddleware(...middleware)));

}

export default store;