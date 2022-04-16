import React from "react";
import Link from 'next/link';
import propTypes from 'prop-types';

const PostCardContent = ( {postData} ) => {
    return(
        <div>
            {/* postData를 해쉬태그 단위로 자른 후 반복을 돌면서 만약 일반 문자열이면 그대로 리턴 그 대상과 매칭된다면  link태그로 리턴 */}
            {postData.split(/(#[^\s#]+)/g).map((v,i) => {
                if(v.match(/(#[^\s#]+)/)) {
                    return <Link href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link> // 맨 처음 hashtag 제거해주기위해 slice
                }

                return v;
            })}
        </div>
    )
}

PostCardContent.propTypes = {postData : propTypes.string.isRequired,}

export default PostCardContent;

// ^ : 제외할 글자
// \s : 공백
// g : 중복 가능(g가 없으면 하나만 선택)
// +  : 모든 글자
// #[^\s#]+ : 첫번째 #과 # 사이에 공백을 제외한 모든 문자열 선택