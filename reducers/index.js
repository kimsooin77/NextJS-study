const initialState  = {
    name : "kimsooin",
    age : 26,
    password : "Hello",
}

const CHANGE_NICKNAME = {
    type : "CHANGE_NICKNAME",
    data : "sooinkim",
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NICKNAME':
            return {
                ...state,
                name : action.date
            }
    }
}

export default rootReducer;