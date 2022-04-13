import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export const Policies = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardHeader
        title="Policies"
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
