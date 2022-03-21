import {getCookie} from '../../functions/getCookie';
import {getFIO} from '../../functions/getFIO';

export function SetFIO (props:any, part_FIO:string){
    switch(part_FIO){
        case 'user_name':
            return defaultState.user_name = props;
        case 'user_surname':
            return defaultState.user_surname = props;
        default:
            return null;
    }
}

const defaultState = {
    AuthUser: false,
    id: getCookie('id'),
    hash: getCookie('hash'),
    user_name: getFIO(getCookie('id'),'user_name'),
    user_surname: getFIO(getCookie('id'),'user_surname'),
}


if(document.cookie){
    defaultState.AuthUser = true;
}else{
    defaultState.AuthUser = false;
}

const SET_AUTHORIZE = 'SET_AUTHORIZE';
const GET_OUT_AUTHORIZE = 'GET_OUT_AUTHORIZE';

export const reducerAuthorize = (state:any = defaultState, action:any) =>{
    switch (action.type){
        case SET_AUTHORIZE:
            return {...state, AuthUser: action.payload };
        case GET_OUT_AUTHORIZE:
            return {...state, AuthUser: action.payload}

        default:
            return state;
    }
}

export const set_authorize = (payload:any) => ({type: SET_AUTHORIZE, payload: payload});
export const get_out_authorize = (payload: any) => ({type: GET_OUT_AUTHORIZE, payload: payload});