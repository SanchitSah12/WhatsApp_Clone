import { Box } from '@mui/material'
import { GoogleLogin } from '@react-oauth/google'
import React, { useContext } from 'react'
import jwt from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api';

const GoogleButton = () => {
    const { setAccount } = useContext(AccountContext);

    const SuccessFunction = async (res) => {
        setAccount(jwt(res.credential))
        await addUser(jwt(res.credential))
    }
    const ErrorFunction = () => {
        alert('error')
    }
    return (
        <Box>
            <GoogleLogin onSuccess={SuccessFunction} onError={ErrorFunction} useOneTap />
        </Box>
    )
}

export default GoogleButton