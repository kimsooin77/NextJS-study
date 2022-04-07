import React from "react";
import AppLayout from '../components/AppLayout';
import Head from 'next/head'
 
const Profile = () => {
    return(
      <>
        <Head>
          <div>내 프로필 ! Profile</div>
        </Head>
        <AppLayout>내 프로필</AppLayout>
      </>
    );
}

export default Profile;