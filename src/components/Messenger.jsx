import React, { useContext } from 'react'
import LoginDialog from './account/LoginDialog'
import { AppBar, Box, Toolbar, styled } from '@mui/material'
import ChatDialog from './chat/ChatDialog'
import { AccountContext } from '../context/AccountProvider'

const Messenger = () => {
  const LoginHeader = styled(AppBar)`
    height: 200px;
    background-color:#00a783;
    box-shadow: none;
  `
  const Component = styled(Box)`
    height: 100vh;
    background-color: #dcdcdc;
  `
  const ChatHeader = styled(Box)`
    height: 125px;
    background-color:#00a783;
    box-shadow: none;
  `

  const { account } = useContext(AccountContext);
  return (
    <Component>
      {
        account ?
          <>
            <ChatHeader>
              <Toolbar>
                <ChatDialog />

              </Toolbar>
            </ChatHeader>
          </> :

          <>
            <LoginHeader>
              <Toolbar></Toolbar>
            </LoginHeader>
            <LoginDialog />
          </>
      }
    </Component>

  )
}

export default Messenger