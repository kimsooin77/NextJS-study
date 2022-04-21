import propTypes from 'prop-types';
import { Button } from 'antd';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({post}) => {
    const {me, followLoading, unfollowLoading} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    // 내가 팔로우한 사람의 아이디와 게시글 작성자의 아이디가 같은지에 따라 팔로잉 유무를 저장
    const isFollowing = me?.Followings.find((v) => v.id === post.User.id)
    const onClickButton = useCallback(() => {
        if(isFollowing) {
            dispatch({
                type : UNFOLLOW_REQUEST,
                data : post.User.id,
            })
        }else {
            dispatch({
                type : FOLLOW_REQUEST,
                data : post.User.id,
            })
        }
    }, [isFollowing]);
    return (
    
        <Button loading={followLoading  || unfollowLoading} onClick={onClickButton}>
            {isFollowing ? '언팔로우' : '팔로우'}
        </Button>
        
    )
};

FollowButton.propTypes = {
    post : propTypes.object.isRequired,
};

export default FollowButton;