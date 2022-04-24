import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";

const Home = () => {
    const { me } = useSelector((state) => state.user); 
    const { mainPosts, hasMorePost, loadPostsLoading } = useSelector((state) => state.post); 
    const [ref, inView] = useInView();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({
            type : LOAD_MY_INFO_REQUEST,
        })

        if(inView && hasMorePost && !loadPostsLoading) {
            const lastId = mainPosts[mainPosts.length - 1]?.id;
            dispatch({
                type : LOAD_POSTS_REQUEST,
                lastId,
            });
        }
    },[inView, hasMorePost, loadPostsLoading, mainPosts]
    );
    return(
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
            <div ref={hasMorePost && !loadPostsLoading ? ref : undefined} />
        </AppLayout>
    )
}

export default Home;