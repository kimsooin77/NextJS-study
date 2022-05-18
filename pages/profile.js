import React, { useEffect, useState, useCallback } from "react";
import useSWR from 'swr';
import AppLayout from '../components/AppLayout';
import Head from 'next/head'
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { useDispatch, useSelector } from "react-redux";
import Router from 'next/router';
import wrapper from "../store/configureStore";

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);
 
const Profile = () => {
    const {me} = useSelector((state) => state.user);
    const [followersLimit, setFollowersLimit] = useState(3);
    const [followingsLimit, setFollowingsLimit] = useState(3);

    const {data : followersData, error : followersError} = useSWR(`http://localhost:3065/user/followers?limit=${followersLimit}`, fetcher);
    const {data : followingsData, error : followingsError} = useSWR(`http://localhost:3065/user/followings?limit=${followingsLimit}`, fetcher);

    useEffect(() => {
      if(!(me && me.id)) {
        Router.push('/');
      }
    },[me && me.id]);

    const loadMoreFollowings = useCallback(() => {
      setFollowingsLimit((prev) => prev + 3);
    },[]);

    const loadMoreFollowers = useCallback(() => {
      setFollowersLimit((prev) => prev + 3);
    },[]);

    if(!me) {
      return '내 정보 로딩중...';
    }

    // return이 useEffect같은 hooks보다 위에 있을 수 없다. 왜냐하면 리턴되면 그 아래는 실행이 되지 않기 때문
    if(followersError || followingsError) {
      console.error(followersError || followingsError);
      return <div>`팔로잉/팔로워 로딩 중 에러가 발생합니다.`</div>;
    }

    return(
      <>
        <Head>
          <title>내 프로필 ! Profile</title>
        </Head>
        <AppLayout>
          <NicknameEditForm />
          <FollowList header="팔로잉" data={followingsData} onClickMore={loadMoreFollowings} loading={!followingsData && !followingsError} />
          <FollowList header="팔로워" data={followersData} onClickMore={loadMoreFollowers} loading={!followersData && !followersError} />
        </AppLayout>
      </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  console.log('getServerSideProps start');
  console.log(req.headers);
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch(END);
  console.log('getServerSideProps end');
  await store.sagaTask.toPromise();
});

export default Profile;