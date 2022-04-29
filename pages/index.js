import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { END } from "@redux-saga";

import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";

const Home = () => {
    const { me } = useSelector((state) => state.user); 
    const { mainPosts, hasMorePost, loadPostsLoading, retweetError } = useSelector((state) => state.post); 
    const [ref, inView] = useInView();
    const dispatch = useDispatch();

    useEffect(() => {
        if(retweetError) {
            alert(retweetError);
        }
    },[retweetError])


    useEffect(() => {
        function onScroll() {
            if(window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if(inView && hasMorePost && !loadPostsLoading) {
                    const lastId = mainPosts[mainPosts.length - 1]?.id;
                    dispatch({
                        type : LOAD_POSTS_REQUEST,
                        lastId,
                    });
                }
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    },[hasMorePost, loadPostsLoading, mainPosts]
    );
    return(
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
            <div ref={hasMorePost && !loadPostsLoading ? ref : undefined} />
        </AppLayout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps( async (context) => {
    console.log(context);
    context.store.dispatch({
        type : LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
        type : LOAD_POSTS_REQUEST,
    });
    context.store.dispatch(END); // 디스패치가 성공하기까지 시간을 벌어주기 위해 적용
    await context.store.sagaTask.toPromise();

}); // 서버사이드렌더링을 위한 준비 (Home보다 먼저 실행된다.)
// 서버사이드렌더링은 처음 렌더링 시 백엔드까지 한번에 갔다가 응답을 받아와 브라우저에서 요청을 두번 하지 않아도돼
// 초기 로딩 속도가 빨라지는 장점이 있다.

export default Home;