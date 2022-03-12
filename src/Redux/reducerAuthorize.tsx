const defaultState = {
    AuthUser: false,
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