import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import useInput from '../hooks/useinput';
import propTypes from 'prop-types';
import { useSelector } from "react-redux";

const CommentForm = ({post}) => {
    const id = useSelector((state) => state.user.me?.id);
    const [commentText, onChnageCommentText] = useInput('');
    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText);
    },[commentText])

    return(
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{position : 'relative', margin:0}}>
                <Input.TextArea value={commentText} onChange={onChnageCommentText} rows={4} />
                <Button type="primary" htmlType="submit">삐약</Button>
            </Form.Item>
        </Form>
    )
}

CommentForm.propTypes = {
    post : propTypes.object.isRequired,
};

export default CommentForm;