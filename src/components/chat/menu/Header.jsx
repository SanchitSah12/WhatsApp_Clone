import { Box,styled } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import {MoreVert,Chat as ChatIcon }  from '@mui/icons-material';
import Search from './Search';
import HeaderMenu from './HeaderMenu';
import Infodrawer from '../../drawer/Infodrawer';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding:8px 16px;
    display: flex;
    align-items: center;

`
const Wrapper = styled(Box)`
    margin-left: auto;
    /* for all */
    & > * {
      margin-left: 2px;
      padding: 8px;
      color: black;
    }

    & :first-child{
      font-size: 22px;
      margin-right: 8px;
      margin-top: 3px;
    }
`
const Image = styled('img')({
  height:40,
  width:40,
  borderRadius:'50%'
})
const Header = () => {
  const [toggleDrawer,setToggleDrawer] = useState(false)
    const {account} = useContext(AccountContext);
  return (
    <>
        <Component>
            <Image src={account.picture} alt="" onClick={()=>setToggleDrawer(true)}/>
            <Wrapper>
              <ChatIcon/> 
              <HeaderMenu openDrawer = {toggleDrawer} setOpenDrawer = {setToggleDrawer}/>
            </Wrapper>
        </Component>
        <Infodrawer openDrawer = {toggleDrawer} setOpenDrawer = {setToggleDrawer}/>
        
    </>
  )
}

export default Header