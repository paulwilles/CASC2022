import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export const ClubCaptains = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardHeader
        title="Club Captains"
      />
    <CardContent>
      <Typography
        variant="h1"
        color="text.secondary"
      >
        TBD
      </Typography>
    </CardContent>
  </Card>
);
