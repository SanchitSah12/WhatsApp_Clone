import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { formatDate } from '../../../utils/commonUtils'

const Own = styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    width: fit-content;
    display: flex;
    margin-left: auto;
    border-radius: 10px;
    padding: 5px;
    word-break: break-word;
    margin:2px 0 2px auto ;
`
const Wrapper = styled(Box)`
    background: #ffffff;
    max-width: 60%;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    padding: 5px;
    word-break: break-word;
    margin-bottom: 5px;
`
const Message = ({message}) => {
  return (
    <Own>
        <Typography>{message.text}</Typography>
        <Typography>{formatDate(message.createdAt)}</Typography>
    </Own>
  )
}

export default Message