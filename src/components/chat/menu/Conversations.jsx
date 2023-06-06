import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../../service/api'
import Conversation from './Conversation';
import { AccountContext } from '../../../context/AccountProvider';
import { Box, Divider, styled } from '@mui/material';

const Conversations = ({searchText}) => {
    const [users, setUsers] = useState([]);
    const { account } = useContext(AccountContext)
    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            const filteredData = response.filter((data)=>{
                return data.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setUsers(filteredData)
         
        }
        fetchData();
    }, [searchText])
    const Component = styled(Box)`
        height: 81vh;
        overflow: auto;
        
    `
    const MsgDivider = styled(Divider)`
        margin: 0 0 0 70px;
        background-color: #e9edef;
        opacity: 0.6;
    `
    return (
        <Component>{
            users.map((user) => (
                user.sub !== account.sub &&
                <>
                    <Conversation user={user} key={user.sub}></Conversation>
                    <MsgDivider />
                </>
            ))}
        </Component>

    )
}

export default Conversations