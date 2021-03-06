import React, {useCallback, useEffect, useState} from "react";
import AppLayout from '../components/AppLayout';
import Head from 'next/head'
import { Button , Checkbox, Form, Input } from "antd";
import LoginForm from "../components/LoginForm";
import propTypes from "prop-types";
import useinput from "../hooks/useinput";
import styled from "styled-components";
import { SIGN_UP_REQUEST } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import Router from 'next/router';

const SignUp = () => {

    const dispatch = useDispatch();
    const {signUpLoading, signUpDone, signUpError, me} = useSelector((state) => state.user);

    useEffect(() => {
      if((me && me.id)) {
        Router.replace('/');
      }
    },[me && me.id]);

    useEffect(()=> {
      if(signUpDone) {
        Router.replace('/');
      }
    },[signUpDone]);
    useEffect(()=> {
      if(signUpError) {
        alert(signUpError);
      }
    },[signUpError]);

    const [email, onChangeEmail] = useinput('');
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
      dispatch({
        type : SIGN_UP_REQUEST,
        data : {email, password, nickname}
      })
    },[email, password, passwordCheck, term]);

    const ErrorMessage = styled.div`
    color : red;
    `;

    return(
        <AppLayout>
          <Head>
            <div>???????????? ! Profile</div>
          </Head>
          
          <Form onFinish={onSubmit}>
            <div>
              <label htmlFor="user-email">?????????</label>
              <br />
              <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
            </div>
            <div>
              <label htmlFor="user-nick">?????????</label>
              <br />
              <Input name="user-nick" value={nickname} required onChange={onchangeNickname} />
            </div>
            <div>
              <label htmlFor="user-password">????????????</label>
              <br />
              <Input type="password" name="user-password" value={password} required onChange={onChangePassword} />
            </div>
            <div>
              <label htmlFor="user-password-check">??????????????????</label>
              <br />
              <Input 
              type="password"
              name="user-password-check" 
              value={passwordCheck} 
              required 
              onChange={onChnagePasswordCheck} 
              />
              {passworrdError && <ErrorMessage>??????????????? ???????????? ????????????.</ErrorMessage>}
            </div>
            <div>
              <Checkbox name="user-term" onChange={onChangeTerm}>????????? ???????????????.</Checkbox>
              {termError && <ErrorMessage>????????? ????????? ???????????????.</ErrorMessage>}
            </div>
            <div style={{marginTop : 10}}>
              <Button type="primary" htmlType="submit" loading={signUpLoading}>??????</Button>
            </div>
          </Form>
        </AppLayout>
    )
}

LoginForm.propTypes = {
  setIsLoggedIn : propTypes.func.isRequired,
}

export default SignUp;

// onFinish??? e.preventdefault??? ???????????? ????????????.