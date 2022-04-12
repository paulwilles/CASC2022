import { Box, Button, ListItem } from '@mui/material';
import { Lock as LockIcon } from '../icons/lock';
import { useMsal } from '@azure/msal-react';

export const SignoutButton = () => {
  const { instance } = useMsal();

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2
      }}
    >
      <Button
        component="a"
        startIcon={<LockIcon fontSize="small" />}
        disableRipple
        onClick={() => instance.logoutRedirect()}
        sx={{
          borderRadius: 1,
          color: 'neutral.300',
          fontWeight: 'fontWeightBold',
          justifyContent: 'flex-start',
          px: 3,
          textAlign: 'left',
          textTransform: 'none',
          width: '100%',
          '& .MuiButton-startIcon': {
            color: 'neutral.400'
          },
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)'
          }
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          Sign Out
        </Box>
      </Button>
    </ListItem>
  );
};

