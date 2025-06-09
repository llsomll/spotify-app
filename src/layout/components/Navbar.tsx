import { Box, styled, Avatar, Typography } from '@mui/material'
import React from 'react'
import LoginButton from '../../common/components/LoginButton'
import useGetCurrentUserProfile from '../../hooks/useGetCurrentUserProfile'
import LogoutButton from '../../common/components/LogoutButton';

const UserProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
}));

const Navbar = () => {
  const {data: userProfile} = useGetCurrentUserProfile();


  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" height="64px">
      { userProfile? 
        <UserProfileContainer>
          <LogoutButton />
          <Typography variant="body1">Welcome, {userProfile.display_name}!</Typography>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={userProfile.images[0]?.url}
            alt={userProfile.display_name}>
          </Avatar>
        </UserProfileContainer>
        : <LoginButton />}
    </Box>
  )
}

export default Navbar
