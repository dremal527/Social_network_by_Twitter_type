import {createStore, combineReducers} from 'redux'
import { reducerPost } from './reducers/reducerPost';
import { reducerMessage } from './reducers/reducerMessage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducerAuthorize } from './reducers/reducerAuthorize';

const rooReducer = combineReducers({
    posts: reducerPost,
    message: reducerMessage,
    authorize: reducerAuthorize,
});

export const store = createStore(rooReducer, composeWithDevTools());