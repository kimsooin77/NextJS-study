import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";


import user from './user';
import post from './post';


// ssr을 위하여 index 리듀서 추가(HTDRATE)
const rootReducer = (state, action) => {
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
};

export default rootReducer;