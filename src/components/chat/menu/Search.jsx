import { Search as SearchIcon } from '@mui/icons-material'
import { Box, styled } from '@mui/material'
import React from 'react'
import { InputBase } from '@mui/material';

const Component = styled(Box)`
    background: #ffff;
    height: 43px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
`
const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    width: 100%;
    border-radius: 10px;
    
`
const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 9px 8px;
    color: #919191;
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 18px;
    height: 15px;
    padding-left: 65px;
    font-size: 14px;
`
const Search = ({setSearchText}) => {
    return (
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon fontSize='small'/>
                </Icon>
                <InputField placeholder='Search or start new chat' onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
            </Wrapper>
        </Component>
    )
}

export default Search