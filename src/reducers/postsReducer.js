import { FETCH_POSTS, NEW_POST } from '../actions/types';
import { bindActionCreators } from '../../../AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';

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
            return{
                ...state,
                item: action.payload
            };
        
        default:
            return state;

    }

}