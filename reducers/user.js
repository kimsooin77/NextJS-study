export const initialState = {
    isLoggedIn : false,
    isLogginIn : false, // 로그인 시도중
    isLogginOut : false, // 로그아웃 시도중
    me : null,
    signUpDate : {},
    loginData : {},
}

export const loginRequestAction = (data) => {
    return {
        type : 'LOG_IN_REQUEST',
        data,
    }
}

export const logoutRequestAction = (data) => {
    return {
        type : 'LOG_OUT_REQUEST',
        data,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST':
            return {
                ...state,
                isLogginIn : true,
            };
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                isLogginIn : false,
                isLoggedIn : true,
                me : {...action.data, nickname : 'sooinkim'},
                
            };
        case 'LOG_IN_FAILURE':
            return {
                ...state,
                isLoggedIn : false,
                isLoggedIn : false,
            };
        case 'LOG_OUT_REQUEST' : 
            return {
                ...state,
                isLogginOut : true,
            }
        case 'LOG_OUT_SUCCESS' : 
            return {
                ...state,
                isLogginOut : false,
                isLoggedIn : false,
                me : null,
            }
        case 'LOG_OUT_FAILURE' : 
            return {
                ...state,
                isLogginOut : false,
            }
        default :
        return state;
    }
    
   
}

export default reducer;