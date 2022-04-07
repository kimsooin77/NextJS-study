import React from "react";
import AppLayout from '../components/AppLayout';
import Head from 'next/head'

const SignUp = () => {
    return(
        <>
          <Head>
            <div>회원가입 ! Profile</div>
          </Head>
          <AppLayout>내 프로필</AppLayout>
        </>
    )
}

export default SignUp;