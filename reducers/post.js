import shortid from "shortid";
import produce from "immer";

export const initialState = {
    mainPosts : [{
        id : 1,
        User : {
            id : 1,
            nickname : "sooinkim",
        },
        content : "첫 번째 게시글 #next.js #coding",
        Images : [{
            id : shortid.generate(),
            src : 'https://i.pinimg.com/564x/09/43/f1/0943f1f3a3badf9b03b19e01f84e6810.jpg'
        }, {
            src : 'https://i.pinimg.com/236x/08/fb/db/08fbdbb51fdf1148ce6a67d2fe6c22f2.jpg'
        }, {
            src : 'https://i.pinimg.com/236x/00/8e/35/008e3564d0892d94a5e34a980b25ef9b.jpg'
        }],
        Comments : [ {
            id : shortid.generate(),
            User : {
                id : shortid.generate(),
                nickname : "fashion",
            },
            content : "첫번째 룩이 가장 마음에 들어요!"
        }, {
            User : {
                id : shortid.generate(),
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
    removePostLoading : false,
    removePostDone : false,
    removePostError : null,
}

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const addPost = (data) =>({
    type : ADD_POST_REQUEST,
    data,
});

export const addComment = (data) =>({
    type : ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = (data) => ( {
    id : data.id,
    content : data.content,
    User : {
        id : 1,
        nickname : "kimsooin"
    },
    Images : [],
    Comments : [],
});

const dummyComment = (data) => ( {
    id : data.id,
    content : data.content,
    User : {
        id : 1,
        nickname : "kimsooin"
    },
});

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_POST_REQUEST : 
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS :
                draft.addPostLoading = false;
                draft.mainPosts.unshift(dummyPost(action.data)); // dummyPost를 앞에 추가해야지 게시글이 위로 쌓임;
                draft.addPostDone = true;
                break;
            case ADD_POST_FAILURE : 
                draft.addPostLoading = false;
                draft.addPostDone = false;
                draft.addPostError = action.error;
                break;
            case REMOVE_POST_REQUEST : 
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS :
                draft.removePostLoading = false;
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
                draft.removePostDone = true;
                break;
            case REMOVE_POST_FAILURE : 
                draft.removePostLoading = false;
                draft.removePostDone = false;
                draft.removePostError = action.error;
                break;
            case ADD_COMMENT_REQUEST : 
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS : {
                const post = draft.mainPosts.find((v) => v.id === action.data.postId);
                post.Comments.unshift(dummyComment(action.data.content));
                draft.addCommentLoading = false;
                draft.addcommentd = true;
                break;
                // 불변성을 지키기 위해 아래와 같이 작성했던 코드를 immer를 사용하면 위의 코드로 정리 가능
                // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
                // const post = {...state.mainPosts[postIndex]};
                // post.Comments = [dummyComment(action.data.content), ...post.Comments];
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = post;
                // return {
                //     ...state,
                //     mainPosts,
                //     addCommentLoading : false,
                //     addCommentDone : true,
                // };
            }
            case ADD_COMMENT_FAILURE : 
                draft.addCommentLoading = false;
                draft.addCommentDone = false;
                draft.addCommentError = action.error;
                break;
            default :
                break;
        }
    });
    
   
}

export default reducer;

// 불변성을 위해 immer 사용(알아서 불변성을 유지해줌)