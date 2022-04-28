import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Comment, List, Popover } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import propTypes from 'prop-types';
import PostImages from "./PostImages";
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST } from "../reducers/post";
import FollowButton from "./FollowButton";

const PostCard = ({post}) => {
    const dispatch = useDispatch();
    const { retweetError} = useSelector((state) => state.post);
    const [commentFormOpend, setCommentFormOpend] = useState(false);
    const id = useSelector((state) => state.user.me?.id);

    const onLike = useCallback(() => {
        if(!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type : LIKE_POST_REQUEST,
            data : post.id,
        })
    },[id]);
    const onUnLike = useCallback(() => {
        if(!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type : UNLIKE_POST_REQUEST,
            data : post.id,
        })
    },[id]);
    const onToggleComment = useCallback(() => {
        if(!id) {
            return alert('로그인이 필요합니다.');
        }
        setCommentFormOpend((prev) => !prev)
    },[])

    const onRemovePost = useCallback(() => {
        if(!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type : REMOVE_POST_REQUEST,
            data : post.id,
        })
    },[id]);

    const onRetweet = useCallback(() => {
        if(!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type : RETWEET_REQUEST,
            data : post.id,
        })
    },[id]);

    const liked = post.Likers.find((v) => v.id === id); // 좋아요 누른 사람들의 아이디 중 내 아이디와 같은 아이디가 있는지 찾음.
    return(
        <div style={{marginBottom : 20}}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" onClick={onRetweet} />,
                    liked 
                        ? <HeartTwoTone twoToneColor="eb2f96" key="heart" onClick={onUnLike} /> // 있으면 취소
                        : <HeartOutlined key="heart" onClick={onLike} />, // 없으면 좋아요 누르기
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {
                                id && post.User.id === id 
                                ? 
                                (
                                    <>
                                        <Button>수정</Button>
                                        <Button type="danger" onClick={onRemovePost}>삭제</Button>
                                    </>
                                )
                                : 
                                <Button>신고</Button>
                            }
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
                title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
                extra={id && <FollowButton post={post} />}
            >

                {
                    post.RetweetId && post.Retweet
                    ? (
                        <Card
                        cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
                        >
                            <Card.Meta
                                avatar={<Avatar>{post.Retweet.User.nickname[0]}</Avatar>}
                                title={post.Retweet.User.nickname}
                                description={<PostCardContent postData={post.Retweet.content} />}
                            />
                        </Card>
                    )
                    : (
                        <Card.Meta
                        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                        title={post.User.nickname}
                        description={<PostCardContent postData={post.content} />}
                        />
                    )
                }

                
            </Card>
            {commentFormOpend && (
                <div>
                    <CommentForm post={post} />
                    <List 
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment 
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
        </div>
    )
};

PostCard.propTypes = {
    post : propTypes.shape({
        id : propTypes.number,
        User : propTypes.object,
        content : propTypes.string,
        createdAt : propTypes.string,
        Comments : propTypes.arrayOf(propTypes.object),
        Images : propTypes.arrayOf(propTypes.object),
        Likers : propTypes.arrayOf(propTypes.object),
        RetweetId : propTypes.number,
        Retweet : propTypes.objectOf(propTypes.any),
    }).isRequired,
};

export default PostCard;

// 배열 안에서 JSX들을 넣을때는 key를 붙여야함.
// propTypes 안에 object 안에 속성들을 다 표기 해주고 싶을 때 shape