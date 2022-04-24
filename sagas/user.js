import axios from 'axios';
import {all, fork, put, takeLatest, delay, call} from 'redux-saga/effects';
import { 
    LOG_IN_SUCCESS, LOG_OUT_SUCCESS, SIGN_UP_SUCCESS,
    LOG_IN_REQUEST, LOG_OUT_REQUEST, SIGN_UP_REQUEST,
    LOG_IN_FAILURE, LOG_OUT_FAILURE, SIGN_UP_FAILURE,
    FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
    UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
    LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE
} from '../reducers/user';


function loadMyInfoAPI() {
    return axios.get('/user');
}

function* loadMyInfo(action) {
    try {
        const result = yield call(loadMyInfoAPI, action.data)
        yield put({
            type : LOAD_MY_INFO_SUCCESS,
            data : result.data,
        });
    } catch(err) {
        yield put({
            type : LOAD_MY_INFO_FAILURE,
            error : err.reponse.data, 
        });
    }
}

function followAPI(data) {
    return axios.post('/api/follow', data); // 로그인 요청 보냄
}

function unfollowAPI(data) {
    return axios.post('/api/unfollow', data); // 로그인 요청 보냄
}


function* follow(action) {
    try {
        yield delay(1000);
        yield put({
            type : FOLLOW_SUCCESS,
            data : action.data,
        });
    } catch(err) {
        yield put({
            type : FOLLOW_FAILURE,
            error : err.reponse.data, 
        });
    }
}

function* unfollow(action) {
    try {
        yield delay(1000);
        yield put({
            type : UNFOLLOW_SUCCESS,
            data : action.data,
        });
    } catch(err) {
        yield put({
            type : UNFOLLOW_FAILURE,
            error : err.reponse.data,
        });
    }
}


function logInAPI(data) {
    return axios.post('/user/login', data); // 로그인 요청 보냄
}

function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data); // 로그인 요청에 대한 결과값을 받아서 변수에 저장
        
        yield put({
            type : LOG_IN_SUCCESS,
            data : result.data, // 로그인 성공시 결과값 안에 들어있는 data
        });
    } catch(err) {
        console.error(err);
        yield put({
            type : LOG_IN_FAILURE,
            error : err.response.data, // 로그인 실패시 결과값 안에 들어있는 data
        });
    }
}


function logOutAPI(data) {
    return axios.post('/user/logout', data)
}


function* logOut() {
    try{
        yield call(logOutAPI);
        yield put({
            type : LOG_OUT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type : LOG_OUT_FAILURE,
            error : err.response.data,
        })
    }
}

function signUpAPI(data) {
    return axios.post('/user', data) // daata는 email,password,nickname이 들어있는 객체이다.
}

function* signUp(action) {
    try{
        const result = yield call(signUpAPI, action.data);
        console.log(result);
        yield put({
            type : SIGN_UP_SUCCESS,
        });
    } catch (err) {
        yield put({
            type : SIGN_UP_FAILURE,
            error : err.response.data,
        })
    }
}

function* watchLoadMyInfo() {
    yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}


export default function* userSaga() {
    yield all([
        fork(watchLoadMyInfo),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}