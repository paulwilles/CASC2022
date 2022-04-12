import react from "react";
import { useMsal } from "@azure/msal-react";

import {
  // Box,
  // Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  // Grid,
  // Paper,
  // TextField,
  // Typography
} from '@mui/material';
import { ProfileData } from "./ProfileData";

export const AccountProfileDetails = () => {
  const { accounts } = useMsal();
  console.log(accounts[0]);

  return (
    <Card>
      <CardHeader
        subheader="The information cannot be edited"
        title="Profile"
      />
      <Divider />
      <CardContent>
        <p>{accounts[0].username}</p>
      </CardContent>
    </Card>
  );

  /*
  const { instance, inProgress } = useMsal();
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    console.log([inProgress, graphData, instance]);
    if (!graphData && inProgress === InteractionStatus.None) {
      callMsGraph().then(response => setGraphData(response)).catch((e) => {
        if (e instanceof InteractionRequiredAuthError) {
          instance.acquireTokenRedirect({
            ...loginRequest,
            account: instance.getActiveAccount()
          });
        }
      });
    }
  }, [inProgress, graphData, instance]);


  return (
    <Paper>
      { (console.log(graphData) || graphData) ? <ProfileData graphData={graphData} /> : null }
    </Paper>
  );
};

const ErrorComponent = ({error}) => {
  return <Typography variant="h6">An Error Occurred: {error.errorCode}</Typography>;
}

const Loading = () => {
  return <Typography variant="h6">Authentication in progress...</Typography>
}

export const AccountProfileDetails = (props) => {
  const authRequest = {
    ...loginRequest
};

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
            errorComponent={ErrorComponent}
            loadingComponent={Loading}
        >
            <ProfileContent />
        </MsalAuthenticationTemplate>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
  */
};
