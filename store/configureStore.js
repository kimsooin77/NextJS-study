import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";

import reducer from '../reducers';
import rootSaga from '../sagas';

const loggerMiddleware = ({dispatch, getState}) => (next) => (action) => {
    console.log(action);
    return next(action);
}

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug : process.env.NODE_ENV === 'development',
});

export default wrapper;

// action을 만들면 history(기록)으로 남는다.

// history가 쌓이면 메모리도 많이 잡아먹고 중앙데이터들이 어떻게 변하는지 보이기때문에
// 보안에도 취약할 수가 있다. 따라 첫번째는 배포용(devtools 연결X) 두번째는 개발용(devtools 연결O)
// compose(applyMiddleware([]))
// composeWithDevTools(applyMiddleware([]))

// 개발자 도구에서 redux를 들어가보면 로그인 로그아웃 기록이 history에 저장되어 확인가능하다.