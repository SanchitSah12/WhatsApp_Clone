import { Box, Dialog, List, ListItem, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { qrCodeImage } from '../../constants/data';

import GoogleButton from './GoogleButton';
import { AccountContext } from '../../context/AccountProvider';

const QRcode = styled('img')({
  height: 264,
  width: 264,
  margin: '50px 0 0 50px'

})

const Title = styled(Typography)`
  font-size: 26px;
  color: #565252;
  font-family: inherit;
  font-weight: 300;
  margin-bottom: 25px;
`
const dialogStyle = {
  height: '95%',
  marginTop: '12%',
  width: '60%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none'
}

const StyledList = styled(List)`
  & > li{
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`
const Component = styled(Box)`
  display: flex;
`
const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`
const LoginDialog = () => {

  return (
    <Dialog PaperProps={{ sx: dialogStyle }} open={true} hideBackdrop>
      <Component>
        <Container>
          <Title>To use Whatsapp on your Computer</Title>
          <StyledList sx={{
            listStyleType: 'number',
            pl: 2,
            '& .MuiListItem-root': {
              display: 'list-item',
            },
          }}>
            <ListItem>
              Open WhatsApp on your Computer
            </ListItem>
            <ListItem>
              Tap Menu Settings and select Whatsapp Web
            </ListItem>
            <ListItem>
              Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: 'relative' }}>
          <QRcode src={qrCodeImage} alt="" />
          <Box style={{ position: 'absolute', top: '50%', left: '25%' }}>
            <GoogleButton />
          </Box>
        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDialog