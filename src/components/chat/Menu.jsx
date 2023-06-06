import { Box } from '@mui/material'
import React, { useState } from 'react'
import Header from './menu/Header'
import Search from './menu/Search'
import Conversations from './menu/Conversations'

const Menu = () => {
  const [searchText,setSearchText] = useState('')
  return (
    <Box>
        <Header/>
        <Search setSearchText={setSearchText}/>
        <Conversations searchText={searchText}/>
    </Box>
  )
}

export default Menu