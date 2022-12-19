import React from 'react'
import AlertModalLayout from '../AlertModalLayout'

const LogoutModal = () => {
  return (
    <AlertModalLayout comment='로그아웃 하시겠어요?'>
      <li>취소</li>
      <li>로그아웃</li>
    </AlertModalLayout>
  )
}

export default LogoutModal