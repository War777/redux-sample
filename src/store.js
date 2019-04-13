import {
     // Return a store object, by passing this to <Provider /> ensures that store availability for our components.
    createStore, 
    // It extends customized redux functionality, it's composable, multiple middlewares can be combined together
    applyMiddleware, 
    // Composes functions from right to left, is to apply multiple store enhancers in a row.
    compose             
} from 'redux';

// It's a middleware that looks at every action that passes through the system, if it's a function, it calls the function.
// https://daveceddia.com/what-is-a-thunk/
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;