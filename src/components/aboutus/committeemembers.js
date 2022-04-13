import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export const CommitteeMembers = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardHeader
        title="Committee Members"
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
