import { HYDRATE } from "next-redux-wrapper";

import user from './user';
import post from './post';
import { combineReducers } from "redux";


// ssr을 위하여 index 리듀서 추가(HTDRATE)
const rootReducer = combineReducers({
    index :  (state = {}, action) => {
        switch (action.type) {
            case HYDRATE : 
                console.log('HYDRATE', action);
                return action.payload;
            
            default : {
                const combinedReducer = combineReducers({
                    user,
                    post,
                });
                return combinedReducer(state, action);
            }
        }
    },
    user,
    post,
});

export default rootReducer;