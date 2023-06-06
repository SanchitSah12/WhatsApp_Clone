import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../../context/AccountProvider'
import { getConversation } from '../../../service/api'


const ChatBox = () => {
  const {person,account} = useContext(AccountContext) 
  const [convo,setConvo] = useState({}) 
  useEffect(()=>{
    const getConversationDetails = async()=>{
      let data = await getConversation({senderId:account.sub,receiverId:person.sub})
      setConvo(data)
    }
    getConversationDetails()
  },[account.sub, person.sub])
  return (
    <Box>
        <ChatHeader person = {person}/>
        <Messages person={person} convo = {convo}/>
    </Box>
  )
}

export default ChatBox