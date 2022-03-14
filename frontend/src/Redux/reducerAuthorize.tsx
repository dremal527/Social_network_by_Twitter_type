import {getCookie} from '../functions/getCookie';
import {getFIO} from '../functions/getFIO';

let User_name_func = getFIO(getCookie('id'),'user_name');
let User_surname_func = getFIO(getCookie('id'),'user_surname').then(value => {return value});

console.log(User_name_func);

const defaultState = {
    AuthUser: false,
    id: getCookie('id'),
    hash: getCookie('hash'),
    user_name: User_name_func,
    user_surname: User_surname_func,
}

if(document.cookie){
    defaultState.AuthUser = true;
}else{
    defaultState.AuthUser = false;
}

const SET_AUTHORIZE = 'SET_AUTHORIZE';

export const reducerAuthorize = (state:any = defaultState, action:any) =>{
    switch (action.type){
        case SET_AUTHORIZE:
            return {...state, AuthUser: action.payload };

        default:
            return state;
    }
}

export const set_authorize = (payload:any) => ({type: SET_AUTHORIZE, payload: payload});