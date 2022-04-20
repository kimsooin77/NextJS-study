import shortid from "shortid";

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
    addPostLoading : false,
    addPostDone : false,
    addPostError : null,
    addCommentLoading : false,
    addCommentDone : false,
    addCommentError : null,
}

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) =>({
    type : ADD_POST_REQUEST,
    data,
});

export const addComment = (data) =>({
    type : ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = (data) => ( {
    id : shortid.generate(),
    content : data,
    User : {
        id : 1,
        nickname : "kimsooin"
    },
    Images : [],
    Comments : [],
});

const dummyComment = (data) => ( {
    id : shortid.generate(),
    content : data,
    User : {
        id : 1,
        nickname : "kimsooin"
    },
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST : 
            return {
                ...state,
                addPostLoading : true,
                addPostDone : false,
                addPostError : null
            }
        case ADD_POST_SUCCESS :
            return {
                ...state,
                addPostLoading : false,
                mainPosts : [dummyPost(action.data), ...state.mainPosts], // dummyPost를 앞에 추가해야지 게시글이 위로 쌓임
                addPostDone : true,
            }
        case ADD_POST_FAILURE : 
            return {
                ...state,
                addPostLoading : false,
                addPostDone : false,
                addPostError : action.error,
            }
        case ADD_COMMENT_REQUEST : 
            return {
                ...state,
                addCommentLoading : true,
                addCommentDone : false,
                addCommentError : null
            }
        case ADD_COMMENT_SUCCESS : {
            const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
            const post = {...state.mainPosts[postIndex]};
            post.Comments = [dummyComment(action.data.content), ...post.Comments];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = post;
            return {
                ...state,
                mainPosts,
                addCommentLoading : false,
                addCommentDone : true,
            };
        }
        case ADD_COMMENT_FAILURE : 
            return {
                ...state,
                addCommentLoading : false,
                addCommentDone : false,
                addCommentError : action.error,
            }
        default :
        return state;
    }
   
}

export default reducer;