import {all, fork, put} from 'redux-saga/effects';

function logInAPI(data) {
    return axios.post('/api/login', data) // 로그인 요청 보냄
}


function* logIn(action) {
    try {
        // const result = yield call(logInAPI, action.data) // 로그인 요청에 대한 결과값을 받아서 변수에 저장
        yield delay(1000);
        yield put({
            type : 'LOG_IN_SUCCESS',
            // data : result.data // 로그인 성공시 결과값 안에 들어있는 data
        });
    } catch(err) {
        yield put({
            type : 'LOG_IN_FAILURE',
            data : err.reponse.data // 로그인 실패시 결과값 안에 들어있는 data
        })
    }
}

function* watchLogin() {
    yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
    yield takeLatest("LOG_OUT_REQUEST");
}


export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}