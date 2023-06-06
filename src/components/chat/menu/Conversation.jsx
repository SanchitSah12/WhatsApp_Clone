import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { AccountContext } from '../../../context/AccountProvider'
import { setConversation } from '../../../service/api'

const Component = styled(Box)`
    display: flex;
    height: 45px;
    padding: 13px 0;
    cursor: pointer;
    & >div> img{
        width: 50px;
        height:50px ;
        border-radius: 50%;
        padding: 0 14px;
        object-fit: cover;
    }
    :hover{
            background-color: gray;
        }
`

const Conversation = ({ user }) => {
    const {setPerson,account} = useContext(AccountContext);
    const getUser = async()=>{
        setPerson(user)
        await setConversation({senderId:account.sub,receiverId: user.sub})
    }
    return (
        <Component onClick={getUser}>
            <Box>
                <img src={user.picture} alt="" />
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Component>
    )
}

export default Conversation