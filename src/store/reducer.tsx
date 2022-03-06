const defaultState = {
    postsData : [
        {name: 'Карл Марков', text_post: 'Это мой первый пост в этом году'},
        {name: 'Карл Марков', text_post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium rerum, ducimus magnam temporibus inventore officiis voluptatem quisquam enim perferendis quibusdam nesciunt, blanditiis reiciendis possimus minima nobis cupiditate doloremque mollitia?'},
    ],
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

const ADD_POST = 'ADD_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';

export const reducer = (state:any = defaultState, action:any) => {
    switch (action.type){
        case ADD_POST:
            return {...state, postsData: [action.payload, ...state.postsData] };

        case ADD_MESSAGE:
            return {...state, MessageData: [...state.MessageData, action.payload]};

        default:
            return state;
    }
}

export const addPostReducer = (payload:any) => ({type: ADD_POST, payload : payload});
export const addMessageReducer = (payload:any) => ({type: ADD_MESSAGE, payload : payload});