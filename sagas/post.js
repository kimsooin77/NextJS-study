import axios from 'axios';
import {all, fork, delay, takeLatest, put, throttle, call} from 'redux-saga/effects';
import shortid from 'shortid';
import { 
    ADD_POST_REQUEST, ADD_COMMENT_REQUEST, 
    ADD_POST_SUCCESS, ADD_COMMENT_SUCCESS, 
    ADD_POST_FAILURE, ADD_COMMENT_FAILURE, 
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, 
    REMOVE_POST_FAILURE , LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, generateDummyPost
} from '../reducers/post';
import { ADD_POST_TO_ME , REMOVE_POST_OF_ME } from '../reducers/user';


function loadPostsAPI(data) {
    return axios.get('/api/post', data) 
}

function* loadPosts(action) {
    try {
        // const result = yield call(addPostAPI, action.data) 
        yield delay(1000);
        yield put({
            type : LOAD_POSTS_SUCCESS,
            data : generateDummyPost(10),
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
    return axios.delete('/api/post', data) 
}

function* removePost(action) {
    try {
        // const result = yield call(addPostAPI, action.data) 
        yield delay(1000);
        // post 리듀서 조작
        yield put({
            type : REMOVE_POST_SUCCESS,
            data : action.data,
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
        fork(watchLoadPost),
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment),
    ])
}


// post saga에서 action 리듀서 호출

// 요청을 보낸 사람이 누군지 알기 위해서는 쿠키를 보내주어야 하기 때문에 front에서는 withCredentials : true,
// back에서는 cors에서 credentials  true를 해주어야함