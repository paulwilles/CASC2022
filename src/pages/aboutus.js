import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { AboutUsInfo } from '../components/aboutus/aboutusinfo';
import { Information } from '../components/aboutus/information';
import { ClubAims } from '../components/aboutus/clubaims';
import { WhereWeSwim } from '../components/aboutus/whereweswim';
import { CommitteeMembers } from '../components/aboutus/committeemembers';
import { ClubCaptains } from '../components/aboutus/clubcaptains';
import { RulesOfCompetition } from '../components/aboutus/rulesofcompetition';
import { Policies } from '../components/aboutus/policies';
import { DashboardLayout } from '../components/dashboard-layout';

const AboutUs = () => (
  <>
    <Head>
      <title>
        About Us
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={6}
            sm={12}
          >
            <AboutUsInfo />
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
          >
            <Information />
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
          >
            <ClubAims />
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
          >
            <WhereWeSwim />
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
          >
            <CommitteeMembers />
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
          >
            <ClubCaptains />
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
          >
            <RulesOfCompetition />
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
          >
            <Policies />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

AboutUs.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default AboutUs;
