import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react';
import { DashboardLayout } from '../components/dashboard-layout';
import { SettingsNotifications } from '../components/settings/settings-notifications';
import { SettingsPassword } from '../components/settings/settings-password';

const Settings = () => (
  <>
    <Head>
      <title>
        Settings | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Settings
        </Typography>
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
      </Container>
    </Box>
  </>
);

Settings.getLayout = (page) => (
  <DashboardLayout>
    <AuthenticatedTemplate>
      {page}
    </AuthenticatedTemplate>
    <UnauthenticatedTemplate>
      <p>This will only render if a user is not signed-in.</p>
    </UnauthenticatedTemplate>
  </DashboardLayout>
);

export default Settings;
