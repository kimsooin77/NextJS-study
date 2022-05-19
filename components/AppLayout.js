import React, { useCallback } from "react";
import propTypes from "prop-types";
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import Router, { useRouter } from 'next/router';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import useInput from "../hooks/useInput";

const Global = createGlobalStyle`
    .ant-row {
        margin-right : 0 !important;
        margin-left : 0 !important;
    }
    .ant-col:first-child {
        padding-left  : 0 !important;
    }
    .ant-col:last-child {
        padding-right : 0 !important;
    }
`;

// 최적화를 위해 styled-component로 스타일 정의
const SearchInput = styled(Input.Search)`
    vertical-align : middle;
`;

// eslint-disable-next-line react/prop-types
const AppLayout = ( { children } ) => {
    const [searchInput, onChangeSearchInput] = useInput('');
    const router = useRouter();
    const {me} = useSelector((state) => state.user);

    const onSearch = useCallback(() => {
        Router.push(`/hashtag/${searchInput}`);
    },[searchInput])

    return(
        <div>
            <Global />
            <Menu 
                mode="horizontal"
                selectedKeys={[router.pathname]}
                items={[
                    { label: <Link href="/"><a>노드버드</a></Link>, key: '/' },
                    { label: <Link href="/profile"><a>프로필</a></Link>, key: '/profile' },
                    { label: <SearchInput
                        enterButton
                        value={searchInput}
                        onChange={onChangeSearchInput}
                        onSearch={onSearch}
                    />,
                    key: '/search' },
                ]}
            >
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm />}
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

AppLayout.propTypes = {
    children : propTypes.node.isRequired,
};

export default AppLayout

// useCallback은 함수를 캐싱하고 useMemo는 값을 캐싱한다.
// _blank 사용시 보안을 확실하게 하기 위해 noreferrer와 noopener를 꼭 명시해주어야 한다.