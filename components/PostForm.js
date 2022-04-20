import { Button, Form, Input } from "antd"
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useinput from "../hooks/useinput";
import { addPost } from "../reducers/post";

const PostForm = () => {
    const {imagePaths, addPostDone} = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const imageInput = useRef();
    const [text, onChangeText, setText] = useinput('');

    useEffect(() => {
        if(addPostDone) {
            setText('');
        }
    },[addPostDone]);

    
    const onSubmit = useCallback(() => {
        dispatch(addPost(text));
    },[text]);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.input.click();
    },[imageInput.current]);

    return (
        <Form style={{margin : '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea 
            value={text} 
            onChange={onChangeText} 
            maxLength={140} 
            placeholder="어떤 룩이 제일 마음에 드시나요?"
            />
            <div>
                <Input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{float : "right"}} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {imagePaths.map((v) => (
                    <div key={v} style={{display : "inline-block"}}>
                        <img src={v} style={{width : "200px"}} alt={v} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
}

export default PostForm;