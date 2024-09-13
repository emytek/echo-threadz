import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'

const UserPage = () => {
  return (
    <>
        <UserHeader />
        <UserPost likes={1200} replies={401} postImg="/boss.jfif" postTitle="Let's talk about threads" />
        <UserPost likes={851} replies={12} postImg="/client.jpg" postTitle="Nice Tutorial"/>
        <UserPost likes={421} replies={98} postImg="/office.jfif" postTitle="I love this guy"/>
        <UserPost likes={212} replies={56} postImg="/equity.jpg" postTitle="Cool app and tech stack"/>
    </>
  )
}

export default UserPage