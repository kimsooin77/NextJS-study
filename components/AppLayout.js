import React from "react";
import propTypes from "prop-types";
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import { useState } from 'react';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

// 최적화를 위해 styled-component로 스타일 정의
const SearchInput = styled(Input.Search)`
vertical-align : middle;
`;

// eslint-disable-next-line react/prop-types
const AppLayout = ( { children } ) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://www.naver.com" target="_blank" rel="noreferrer noopener">Mede by Kimsooin</a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.prototype = {
    children : propTypes.node.isRequired,
};

export default AppLayout

// useCallback은 함수를 캐싱하고 useMemo는 값을 캐싱한다.