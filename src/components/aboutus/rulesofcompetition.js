import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export const RulesOfCompetition = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardHeader
        title="Rules Of Competition"
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
