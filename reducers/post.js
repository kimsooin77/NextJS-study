export const initialState = {
    mainPosts : [{
        id : 1,
        User : {
            id : 1,
            nickname : "sooinkim",
        },
        content : "첫 번째 게시글 #next.js #coding",
        Images : [{
            src : 'https://i.pinimg.com/564x/09/43/f1/0943f1f3a3badf9b03b19e01f84e6810.jpg'
        }, {
            src : 'https://i.pinimg.com/236x/08/fb/db/08fbdbb51fdf1148ce6a67d2fe6c22f2.jpg'
        }, {
            src : 'https://i.pinimg.com/236x/00/8e/35/008e3564d0892d94a5e34a980b25ef9b.jpg'
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