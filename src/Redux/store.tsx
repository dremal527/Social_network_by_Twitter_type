import {createStore, combineReducers} from 'redux'
import { reducerPost } from './reducerPost';
import { reducerMessage } from './reducerMessage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducerAuthorize } from './reducerAuthorize';

const rooReducer = combineReducers({
    posts: reducerPost,
    message: reducerMessage,
    authorize: reducerAuthorize,
});

export const store = createStore(rooReducer, composeWithDevTools());