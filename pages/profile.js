import React from "react";
import AppLayout from '../components/AppLayout';
import Head from 'next/head'
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
 
const Profile = () => {

  const followerList = [{nickname : '김수인'}, {nickname : '헬로'}, {nickname : "월드"}];
  const followingList = [{nickname : '김수인'}, {nickname : '헬로'}, {nickname : "월드"}];
  
    return(
      <>
        <Head>
          <title>내 프로필 ! Profile</title>
        </Head>
        <AppLayout>
          <NicknameEditForm />
          <FollowList header="팔로잉 목록" data={followingList}/>
          <FollowList header="팔로워 목록" data={followerList} />
        </AppLayout>
      </>
    );
}

export default Profile;