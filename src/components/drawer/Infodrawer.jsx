import { ArrowBack } from '@mui/icons-material'
import { Box, Drawer, Typography, styled } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import Profile from './Profile'
const drawerStyle = {
    left:20,
    top:17,
    height:'95%',
    width:'30%',
    boxShadow:'none'
}

const Header = styled(Box)`
    background-color: #008069;
    height: 107px;
    color: white;
    display: flex;
    & > svg, & > p{
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
`
const Component = styled(Box)`
    background: #ededed;

`
const Text = styled(Typography)`
    font-size: 18px;
`

const Infodrawer = ({ openDrawer, setOpenDrawer }) => {
    return (
        <Drawer
            open={openDrawer}
            onClose={() => {
                setOpenDrawer(false)
            }}
            PaperProps={{sx:drawerStyle}}
            style={{zIndex:1500}}
        >
            <Header>
                <ArrowBack onClick={()=>{setOpenDrawer(false)}}/>
                <Text>Profile</Text>
            </Header>
            <Component>
                <Profile/>
            </Component>
        </Drawer>
    )
}

export default Infodrawer