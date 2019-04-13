import { FETCH_POSTS, NEW_POST, DELETE_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){

    switch( action.type ){
        
        case FETCH_POSTS: 
            
            console.log('FETCH_POSTS...');
            return {
                ...state,
                items: action.payload
            };

        case NEW_POST:
            
            console.log('NEW_POST...');
            return{
                ...state,
                item: action.payload
            };

        case DELETE_POST:
            
            console.log('DELETE_POST');

            let remainingItems = state.items.filter((item) => item.id !== action.payload.postId);

            return {
                items: remainingItems,
                item:[]
            };

        default:
            return state;

    }

}