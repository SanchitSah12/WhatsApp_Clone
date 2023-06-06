import { Box, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { MoreVert, Search } from '@mui/icons-material'
import { defaultProfilePicture } from '../../../constants/data'

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;

`
const Image = styled('img')({
    height:40,
    width:40,
    borderRadius:'50%',
    objectFit:'cover'
})

const Name = styled(Typography)`
    margin-left:12px !important;
    
`
const Status = styled(Typography)`
    margin-left:12px !important;
    font-size: 12px;
    color: rgba(0,0,0,0.6);


`
const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg{
        padding:8px;
        font-size: 24px;
        color: black;
    }
`
const ChatHeader = ({person}) => {
    const {account} = useContext(AccountContext)
  return (
    <Header>
        <Image src={person.picture} alt="dp" />
        <Box>
            <Name>{person.name}</Name>
            <Status>Online</Status>
        </Box>
        <RightContainer>
            <Search></Search>
            <MoreVert></MoreVert>
        </RightContainer>
    </Header>
  )
}

export default ChatHeader