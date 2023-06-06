import { Box, Divider, Typography, styled } from '@mui/material'
import React from 'react'
import {emptyChatImage} from '../../../constants/data'
const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh; 
`
const Container = styled(Box)`
  padding: 0 200px;
  & > img {
    width: 400px;
    margin-top: 100px;
  }
  & :nth-child(2){
    font-size: 32px ;
    margin: 25px 0 10px 0;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
  

  }
  & :nth-child(3), & :nth-child(4){
    font-size: 14px ;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
  }
  & :nth-child(5){
    margin: 40px 0;
    opacity: 0.4;
  }
`
const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <img src={emptyChatImage} alt="" />
        <Typography>WhatsApp Web</Typography>
        <Typography>Now send and receive messages without keeping your phone online</Typography>
        <Typography>Use WhatsApp on upto 4 linked devices and 1 phone at the same time</Typography>
        <Divider></Divider>
      </Container>
    </Component>
  )
}

export default EmptyChat