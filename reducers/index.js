import { HYDRATE } from "next-redux-wrapper";

import user from './user';
import post from './post';
import { combineReducers } from "redux";


// ssr을 위하여 index 리듀서 추가(HTDRATE)
const rootReducer = combineReducers({
    index :  (state = initialState, action) => {
        switch (action.type) {
            case HYDRATE : 
                console.log('HYDRATE', action);
                return { ...state, ...action.payload};
            
            default :
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;