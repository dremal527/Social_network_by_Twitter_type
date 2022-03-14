const defaultState = {
    userData : [
        { id_user: 1, name: "Dima" },
        { id_user: 2, name: "Oleg" },
        { id_user: 3, name: "Misha" },
    ],
    MessageData : [
        {id: 1, message : "Hello It's a prunk BRO !", person: 0},
        {id: 2, message : "Hey how are ypu ?", person: 1},
        {id: 3, message : "I'm fine, and you ?", person: 0},
    ],
}

const ADD_MESSAGE = 'ADD_MESSAGE';

export const reducerMessage = (state:any = defaultState, action:any) => {
    switch (action.type){
        case ADD_MESSAGE:
            return {...state, MessageData: [...state.MessageData, action.payload]};

        default:
            return state;
    }
}

export const addMessageReducer = (payload:any) => ({type: ADD_MESSAGE, payload : payload});