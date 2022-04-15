import React, { useCallback, useState } from "react";
import propTypes from 'prop-types';
import { PlusOutlined } from "@ant-design/icons";
import ImagesZoom from "./imagesZoom";

const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);
    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    },[])
    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    },[])
    if(images.length === 1){
        return(
            <>
                <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />   
                {showImagesZoom && <ImagesZoom image={images} onClose={onClose} />}
            </>
        )
    }
    if(images.length === 2) {
        <>
            <img role="presentation" style={{width : '50%', display : 'inline-block'}} src={images[0].src} alt={images[0].src} onClick={onZoom} />   
            <img role="presentation" style={{width : '50%', display : 'inline-block'}} src={images[1].src} alt={images[1].src} onClick={onZoom} />   
            {showImagesZoom && <ImagesZoom image={images} onClose={onClose} />}
        </>
    }
    return (
        <>
            <img style={{width : '50%', display : 'inline-block'}} role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom}></img>   
            <div
                role="presentation"
                style={{ display : 'inline-block' , width :'50%',  textAlign : 'center', verticalAlign : 'middle'  }}
                onClick={onZoom}
            >
                <PlusOutlined />
                <br />
                {images.length - 1}
                개의 사진 더 보기
            </div>
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
    )
}

PostImages.propTypes = {
    images : propTypes.arrayOf(propTypes.object),
}

export default PostImages;