const defaultState = {
    postsData : [
        {name: 'Карл Марков', text_post: 'Это мой первый пост в этом году'},
        {name: 'Карл Марков', text_post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium rerum, ducimus magnam temporibus inventore officiis voluptatem quisquam enim perferendis quibusdam nesciunt, blanditiis reiciendis possimus minima nobis cupiditate doloremque mollitia?'},
    ],
}

const ADD_POST = 'ADD_POST';

export const reducerPost = (state:any = defaultState, action:any) => {
    switch (action.type){
        case ADD_POST:
            return {...state, postsData: [action.payload, ...state.postsData] };

        default:
            return state;
    }
}

export const addPostReducer = (payload:any) => ({type: ADD_POST, payload : payload});