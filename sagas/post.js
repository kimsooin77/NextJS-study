import axios from 'axios';
import {all, fork, delay, takeLatest, put, throttle, call} from 'redux-saga/effects';
import shortid from 'shortid';
import { 
    ADD_POST_REQUEST, ADD_COMMENT_REQUEST, 
    ADD_POST_SUCCESS, ADD_COMMENT_SUCCESS, 
    ADD_POST_FAILURE, ADD_COMMENT_FAILURE, 
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, 
    REMOVE_POST_FAILURE , LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
    LIKE_POST_REQUEST, LIKE_POST_SUCCESS,
    UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_FAILURE,
    UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE
} from '../reducers/post';
import { ADD_POST_TO_ME , REMOVE_POST_OF_ME } from '../reducers/user';


function uploadImagesAPI(data) {
    return axios.post('/post/images', data) 
}

function* uploadImages(action) {
    try {
        const result = yield call(uploadImagesAPI, action.data);
        yield put({
            type : UPLOAD_IMAGES_SUCCESS,
            data : result.data,
        });
    } catch(err) {
        yield put({
            type : UPLOAD_IMAGES_FAILURE,
            data : err.reponse.data 
        })
    }
}

function unlikePostAPI(data) {
    return axios.delete(`/post/${data}/like`) 
}

function* unlikePost(action) {
    try {
        const result = yield call(unlikePostAPI, action.data);
        yield put({
            type : UNLIKE_POST_SUCCESS,
            data : result.data,
        });
    } catch(err) {
        yield put({
            type : UNLIKE_POST_FAILURE,
            data : err.reponse.data 
        })
    }
}
function likePostAPI(data) {
    return axios.patch(`/post/${data}/like`); 
}

function* likePost(action) {
    try {
        const result = yield call(likePostAPI, action.data);
        yield put({
            type : LIKE_POST_SUCCESS,
            data : result.data,
        });
    } catch(err) {
        console.error(err);
        yield put({
            type : LIKE_POST_FAILURE,
            data : err.reponse.data 
        })
    }
}
function loadPostsAPI(data) {
    return axios.get('/posts', data) 
}

function* loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI, action.data);
        yield put({
            type : LOAD_POSTS_SUCCESS,
            data : result.data,
        });
    } catch(err) {
        yield put({
            type : LOAD_POSTS_FAILURE,
            data : err.reponse.data 
        })
    }
}
function addPostAPI(data) {
    return axios.post('/post', { content : data }) 
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data); 
        const id = shortid.generate();
        yield put({
            type : ADD_POST_SUCCESS,
            data : result.data,
        });
        yield put({
            type : ADD_POST_TO_ME,
            data : result.data.id,
        })
    } catch(err) {
        yield put({
            type : ADD_POST_FAILURE,
            data : err.reponse.data 
        })
    }
}
function removePostAPI(data) {
    return axios.delete(`/post/${data}`) // delete의 데이터는 post.id
}

function* removePost(action) {
    try {
        const result = yield call(removePostAPI, action.data);
        // post 리듀서 조작
        yield put({
            type : REMOVE_POST_SUCCESS,
            data : result.data,
        });
        // user 리듀서 조작
        yield put({
            type : REMOVE_POST_OF_ME,
            data : action.data,
        })
    } catch(err) {
        yield put({
            type : REMOVE_POST_FAILURE,
            data : err.reponse.data 
        })
    }
}

function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, data); 
}

function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data);
        yield put({
            type : ADD_COMMENT_SUCCESS,
            data : result.data,
        });
    } catch(err) {
        yield put({
            type : ADD_COMMENT_FAILURE,
            data : err.reponse.data 
        })
    }
}

function* watchUploadImages() {
    yield takeLatest( UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchLikePost() {
    yield takeLatest( LIKE_POST_REQUEST, likePost);
}

function* watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchLoadPost() {
    yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchUploadImages),
        fork(watchUnlikePost),
        fork(watchLikePost),
        fork(watchLoadPost),
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment),
    ])
}


// post saga에서 action 리듀서 호출

// 요청을 보낸 사람이 누군지 알기 위해서는 쿠키를 보내주어야 하기 때문에 front에서는 withCredentials : true,
// back에서는 cors에서 credentials  true를 해주어야함