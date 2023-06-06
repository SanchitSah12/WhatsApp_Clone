import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Box, Typography, styled } from '@mui/material'


const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`
const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
})
const NameWrapper = styled(Box)`
    background: white;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    & :nth-child(1){
        font-size: 13px;
        color: #009688;
        font-weight: 200;

    }
    & :last-child{
        margin: 14px 0;
        color: #4A4A4A;
    }
`
const DescriptionContainer = styled(Box)`
    padding: 15px 20px 20px 30px;
    & > p {
        font-size: 13px;
        color:#8696a0;
    }
`
const Profile = () => {
    const { account } = useContext(AccountContext)
    return (
        <>
            <ImageContainer>
                <Image src={account.picture} alt="" />
            </ImageContainer>
            <NameWrapper>
                <Typography>
                    Your Name
                </Typography>
                <Typography>{account.name}</Typography>
            </NameWrapper>
            <DescriptionContainer>
                <Typography>This is not your username or pin. This name will be visible to your whatsapp contacts</Typography>
            </DescriptionContainer>
            <NameWrapper>
                <Typography>
                    About
                </Typography>
                <Typography>
                    Eat Sleep Repeat
                </Typography>
            </NameWrapper>

        </>
    )
}

export default Profile