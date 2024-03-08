import React from 'react'
import UserGreeting from './components/UserGreeting';

function AppRendering() {
  return (
    <>
        <UserGreeting isLoggedIn={true} username="SachinAkash" />
    </>
  )
}

export default AppRendering;
