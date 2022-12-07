import React from 'react'
import Header from '../../components/common/Header';
import { ReactComponent as BackIcon } from '../../assets/icons/icon-arrow-left.svg';
import { ReactComponent as ModalIcon } from '../../assets/icons/icon- more-vertical.svg'

const Profile = () => {
  return (
    <>
      <Header leftContent={<BackIcon />} rightContent={<ModalIcon />} /> 
      <div style={{
        height: '200vh'
      }}>Profile</div>
    </>
  )
}

export default Profile;