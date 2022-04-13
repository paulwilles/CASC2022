import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export const WhereWeSwim = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardHeader
        title="Where We Swim"
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
