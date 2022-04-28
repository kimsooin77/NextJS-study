import { Button, Form, Input } from "antd"
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useinput from "../hooks/useinput";
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from "../reducers/post";

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
        if(!text || !text.trim()) {
            return alert('게시글을 작성하세요.')
        }
        const formData = new FormData();
        imagePaths.forEach((p) => {
            formData.append('image', p); 
        });
        formData.append('content', text)
        return dispatch({
            type : ADD_POST_REQUEST,
            data : formData
        });
    },[text, imagePaths]);

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
    
    

    const onClickImageUpload = useCallback(() => {
        imageInput.current.input.click();
    },[imageInput.current]);

    const onRemoveImage = useCallback((index) => () => {
        dispatch({
            type : REMOVE_IMAGE,
            data : index,
        })
    })

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
                {imagePaths.map((v, i) => (
                    <div key={v} style={{display : "inline-block"}}>
                        <img src={`http://localhost:3065/${v}`} style={{width : "200px"}} alt={v} />
                        <div>
                            <Button onClick={onRemoveImage(i)}>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
}

export default PostForm;