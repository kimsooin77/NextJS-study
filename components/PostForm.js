import { Button, Form, Input } from "antd"
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useinput from "../hooks/useinput";
import { addPost, UPLOAD_IMAGES_REQUEST } from "../reducers/post";

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

    const onChangeImages = useCallback((e) => {
        console.log('images', e.target.files); // 선택했던 이미지들에 대한 정보들 확인
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => { // 유사배열 객체를 돌면서 이미지를 넣어줌
            imageFormData.append('image', f); // router/post에 배열도는 'image'와 일치해야함
        });
        dispatch({
            type : UPLOAD_IMAGES_REQUEST,
            data : imageFormData,
        })
    })
    
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
                <Input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
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