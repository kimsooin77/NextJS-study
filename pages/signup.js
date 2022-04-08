import React, {useCallback, useState} from "react";
import AppLayout from '../components/AppLayout';
import Head from 'next/head'
import { Button , Checkbox, Form, Input } from "antd";
import LoginForm from "../components/LoginForm";
import propTypes from "prop-types";
import useinput from "../hooks/useinput";
import styled from "styled-components";

const SignUp = () => {
    const [id, onChangeId] = useinput('');
    const [nickname, onchangeNickname] = useinput('');

    const [password, onChangePassword] = useinput('');
    const [passwordCheck, setPasswordChek] = useState('');
    const [passworrdError, setPasswordError] = useState(false);
    const onChnagePasswordCheck = useCallback((e) => {
        setPasswordChek(e.target.value);
        setPasswordError(e.target.value !== password)
    },[password])

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
      setTerm(e.target.checked);
      setTermError(false);
    },[]);
    const onSubmit = useCallback(() => {
      if(password !== passwordCheck) {
        return setPasswordError(true)
      }
      if(!term) {
        return setTermError(true);
      }
      console.log(password, passwordCheck, term);
     },[password, passwordCheck, term]);

    const ErrorMessage = styled.div`
    color : red;
    `;

    return(
        <AppLayout>
          <Head>
            <div>회원가입 ! Profile</div>
          </Head>
          
          <Form onFinish={onSubmit}>
            <div>
              <label htmlFor="user-id">아이디</label>
              <br />
              <Input name="user-id" value={id} required onChange={onChangeId} />
            </div>
            <div>
              <label htmlFor="user-nick">닉네임</label>
              <br />
              <Input name="user-nick" value={nickname} required onChange={onchangeNickname} />
            </div>
            <div>
              <label htmlFor="user-password">비밀번호</label>
              <br />
              <Input type="password" name="user-password" value={password} required onChange={onChangePassword} />
            </div>
            <div>
              <label htmlFor="user-password-check">비밀번호체크</label>
              <br />
              <Input 
              type="password"
              name="user-password-check" 
              value={passwordCheck} 
              required 
              onChange={onChnagePasswordCheck} 
              />
              {passworrdError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </div>
            <div>
              <Checkbox name="user-term" onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
              {termError && <ErrorMessage>약관에 동의가 필요합니다.</ErrorMessage>}
            </div>
            <div style={{marginTop : 10}}>
              <Button type="primary" htmlType="submit">가입</Button>
            </div>
          </Form>
        </AppLayout>
    )
}

LoginForm.propTypes = {
  setIsLoggedIn : propTypes.func.isRequired,
}

export default SignUp;

// onFinish는 e.preventdefault가 자동으로 적용된다.