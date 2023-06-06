import { Box, styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import { AccountContext } from '../../../context/AccountProvider'
import { newMessage,getMessages } from '../../../service/api'
import Message from './Message'

const Wrapper = styled(Box)`
    background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
    background-size: 50%;
`

const Component = styled(Box)`
overflow-y:scroll ;
height: 79.5vh;
`
const Messages = ({ person,convo }) => {
  const [text,setText] = useState([])

  const { account } = useContext(AccountContext)
  const sendText = async(e) => {
    const code = e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId:convo._id,
        type:'text',
        text:text,
      }
      setText('')
      await newMessage(message)
    }
  }
  const [messages,setMessages ] = useState([])
  useEffect(() => {
    const getMessageDetails = async()=>{
      const messages = await getMessages(convo._id)
      setMessages(messages)
    }
    convo._id && getMessageDetails()
  },[convo._id, person._id,messages])
  return (
    <Wrapper>
      <Component>
        {
          messages && messages.map((message,index)=>{
            return <Message message={message} key={index}/>
          })
        }
      </Component>
      <Footer
        sendText={sendText} 
        setText={setText}
        text={text}
      />
    </Wrapper>
  )
}

export default Messages