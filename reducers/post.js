export const initialState = {
    mainPosts : [{
        id : 1,
        User : {
            id : 1,
            nickname : "sooinkim",
        },
        content : "첫 번째 게시글 #next.js #coding",
        Images : [{
            src : '../pictures/outfit1.JPG'
        }, {
            src : '../pictures/outfit2.JPG'
        }, {
            src : '../pictures/outfit3.JPG'
        }],
        Comments : [ {
            User : {
                nickname : "fashion",
            },
            content : "첫번째 룩이 가장 마음에 들어요!"
        }, {
            User : {
                nickname : "strawberry"
            },
            content : "색감이 예쁘네요~"
        }]
    }],
    imagePaths : [],
    postAdded : false,
}

const ADD_POST = "ADD_POST";

export const addPosts = {
    type : ADD_POST,
}

const dummyPost = {
    id : 2,
    content : "더미데이터입니다.",
    User : {
        id : 1,
        nickname : "kimsooin"
    },
    Images : [],
    Comments : [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            return {
                ...state,
                mainPosts : [dummyPost, ...state.mainPosts], // dummyPost를 앞에 추가해야지 게시글이 위로 쌓임
                postAdded : true,
            }
        default :
        return state;
    }
   
}

export default reducer;