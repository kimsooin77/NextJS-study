import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Comment, List, Popover } from "antd";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import propTypes from 'prop-types';
import PostImages from "./PostImages";
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from "../reducers/post";
import FollowButton from "./FollowButton";

const PostCard = ({post}) => {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false);
    const [commentFormOpend, setCommentFormOpend] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    },[]);
    const onToggleComment = useCallback(() => {
        setCommentFormOpend((prev) => !prev)
    },[])

    const onRemovePost = useCallback(() => {
        dispatch({
            type : REMOVE_POST_REQUEST,
            data : post.id,
        })
    },[]);

    const id = useSelector((state) => state.user.me?.id);
    return(
        <div style={{marginBottom : 20}}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked 
                        ? <HeartTwoTone twoToneColor="eb2f96" key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />,
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
                extra={id && <FollowButton post={post} />}
            >

                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
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
    }).isRequired,
};

export default PostCard;

// 배열 안에서 JSX들을 넣을때는 key를 붙여야함.
// propTypes 안에 object 안에 속성들을 다 표기 해주고 싶을 때 shape