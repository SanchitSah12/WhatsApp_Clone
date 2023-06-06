import { AttachFile, Mic } from '@mui/icons-material'
import EmojiEmotions from '@mui/icons-material/EmojiEmotionsOutlined'
import { Box, InputBase, styled } from '@mui/material'
import React, { useState } from 'react'

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    width: 97%;
    align-items: center;
    padding:0 15px;
    &>*{
        margin: 5px;
    }

`
const Input = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;
`
const InputBox = styled(Box)`
  background-color: #ffffff;
  border-radius: 10px;
  width: calc(94%  -    50px);
  border-radius: 0;
`

const Footer = ({sendText,setText,text}) => {
    return (
        <Container>
            <EmojiEmotions />
            <AttachFile style={{transform:'rotate(40deg)'}}/>
            <InputBox>
                <Input placeholder='Type a message' onChange={(e)=>setText(e.target.value)}
                    onKeyPress={(e)=>sendText(e)} value={text}
                />
            </InputBox>
            <Mic />
        </Container>
    )
}

export default Footer