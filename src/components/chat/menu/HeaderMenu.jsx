import { MoreVert } from '@mui/icons-material'
import { Menu, MenuItem, styled } from '@mui/material'
import React, { useState } from 'react'

const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 100px 5px 34px;
    color: #4A4A4A;
`
const HeaderMenu = ({openDrawer,setOpenDrawer}) => {
    const [open,setOpen] = useState(null);
    const handleClose = ()=>{
        setOpen(false);
    }
    const handleClick = (e)=>{
        setOpen(e.currentTarget);
    }
    return (
        <>
            <MoreVert onClick={handleClick}/>
            <Menu
                anchorEl={open}
                onClose={handleClose}
                keepMounted
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'center'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuOption onClick={()=>{setOpenDrawer(true); handleClose()}} >Profile</MenuOption>
                <MenuOption onClick={handleClose}>My account</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>
        
    </>
  )
}

export default HeaderMenu