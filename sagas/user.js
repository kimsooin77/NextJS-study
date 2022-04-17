import axios from 'axios';
import {all, fork, put, takeLatest, delay} from 'redux-saga/effects';

function logInAPI(data) {
    return axios.post('/api/login', data); // 로그인 요청 보냄
}

function logOutAPI(data) {
    return axios.post('/api/logout', data)
}


function* logIn(action) {
    try {
        // const result = yield call(logInAPI, action.data) // 로그인 요청에 대한 결과값을 받아서 변수에 저장
        yield delay(1000);
        yield put({
            type : 'LOG_IN_SUCCESS',
            data : action.data,
            // data : result.data // 로그인 성공시 결과값 안에 들어있는 data
        });
    } catch(err) {
        yield put({
            type : 'LOG_IN_FAILURE',
            data : err.reponse.data, // 로그인 실패시 결과값 안에 들어있는 data
        });
    }
}

function* logOut() {
    try{
        yield delay(1000);
        yield put({
            type : 'LOG_OUT_SUCCESS',
        });
    } catch (err) {
        yield put({
            type : 'L0G_OUT_FAILURE',
            data : err.response.data,
        })
    }

}

function* watchLogIn() {
    yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
    yield takeLatest("LOG_OUT_REQUEST", logOut);
}


export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}