import { Paper } from '@material-ui/core';
import Typography from './components/typography';
import Button from './components/button';
import Img from './components/img';
import Grid from './components/grid';
import Navegation from './components/views/components/navegation';
import Footer from './components/views/components/footer';
import Link from './components/link';

function App() {
  return (
    <Grid className="App" container>
      <Navegation />
      <Grid bgimageintro lg={6} />
      <Grid bgimagemockups lg={4} />
      <Grid container bgColor="VeryLightGray" className="mobilec1">
        <Grid item lg={1} />
        <Grid lg={5} paddingTop={140} paddingBottom={150}>
          <Grid className="mobilecenter">
            <Typography
              variant="h1"
              noWrap
              mr="medium"
              fontS="large"
              marginBottom={15}
              color="DarkBlue"
              width={50}
            >
              Next generation digital banking
            </Typography>
            <Typography variant="body1" marginBottom={15} width={70}>
              Lorem ipsum maecenas malesuada diam ut netus id praesent conubia diam, neque porta ac
              facilisis proin mi molestie tempor erat,
            </Typography>
          </Grid>
          <Grid>
            <Button>Request Invite</Button>
          </Grid>
        </Grid>
      </Grid>
      {/* segunda parte */}

      <Grid item lg={1} bgColor="LightGrayishBlue" />
      <Grid
        bgColor="LightGrayishBlue"
        paddingTop={100}
        paddingBottom={100}
        item
        lg={11}
        zindex={2}
        className="mobilec1"
      >
        <Grid item className="mobilecenter">
          <Grid width={50}>
            <Typography
              variant="h1"
              noWrap
              mr="medium"
              fontS="medium"
              marginBottom={15}
              color="DarkBlue"
            >
              Why choose Easybank?
            </Typography>
            <Typography variant="body1" marginBottom={15} fontS="small">
              Lorem ipsum maecenas malesuada diam ut netus id praesent conubia diam, neque porta ac
              facilisis proin mi molestie tempor erat.
            </Typography>
          </Grid>
          <Grid container paddingTop={40} className="mobilecenter" lg={10}>
            <Grid paddingRight={10} width={17} className="mobileText" item lg>
              <Grid paddingBottom={20}>
                <Img src="/images/icon-online.svg" />
              </Grid>
              <Typography variant="h3" noWrap mr="medium" marginBottom={15} color="DarkBlue">
                Online Banking
              </Typography>
              <Typography variant="body1" marginBottom={15} fontS="tiny">
                Lorem ipsum maecenas malesuada diam ut netus id praesent conubia diam, neque porta
                ac facilisis proin mi molestie tempor erat.
              </Typography>
            </Grid>
            <Grid paddingRight={10} width={17} className="mobileText" item lg>
              <Grid paddingBottom={20}>
                <Img src="/images/icon-budgeting.svg" />
              </Grid>
              <Typography variant="h3" noWrap mr="medium" marginBottom={15} color="DarkBlue">
                Simple Budgeting
              </Typography>
              <Typography variant="body1" marginBottom={15} fontS="tiny">
                Lorem ipsum maecenas malesuada diam ut netus id praesent conubia diam, neque porta
                ac facilisis proin mi molestie tempor erat.
              </Typography>
            </Grid>
            <Grid paddingRight={10} width={17} className="mobileText" item lg>
              <Grid paddingBottom={20}>
                <Img src="/images/icon-onboarding.svg" />
              </Grid>
              <Typography variant="h3" noWrap mr="medium" marginBottom={15} color="DarkBlue">
                Fast Onboarding
              </Typography>
              <Typography variant="body1" marginBottom={15} fontS="tiny">
                Lorem ipsum maecenas malesuada diam ut netus id praesent conubia diam, neque porta
                ac facilisis proin mi molestie tempor erat.
              </Typography>
            </Grid>
            <Grid paddingRight={10} width={17} className="mobileText" item lg>
              <Grid paddingBottom={20}>
                <Img src="/images/icon-api.svg" />
              </Grid>
              <Typography variant="h3" noWrap mr="medium" marginBottom={15} color="DarkBlue">
                Open API
              </Typography>
              <Typography variant="body1" marginBottom={15} fontS="tiny">
                Lorem ipsum maecenas malesuada diam ut netus id praesent conubia diam, neque porta
                ac facilisis proin mi molestie tempor erat.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* parte 3 */}
      <Grid item lg={1} bgColor="VeryLightGray" />
      <Grid
        item
        bgColor="VeryLightGray"
        paddingTop={100}
        paddingBottom={200}
        lg
        className="mobilec1"
      >
        <Grid paddingBottom={20} item>
          <Typography
            variant="h1"
            noWrap
            mr="medium"
            marginBottom={15}
            color="DarkBlue"
            fontS="medium"
          >
            Latest Articles
          </Typography>
        </Grid>
        <Grid container className="mobilecenter">
          <Grid paddingRight={20} width={20} className="mobileCard" textalign="initial">
            <Paper elevation={0}>
              <Img src="images/image-currency.jpg" width={100} />
              <Typography
                variant="h3"
                noWrap
                mr="medium"
                marginBottom={15}
                color="GrayishBlue"
                fontS="tiny"
              >
                texto pequeno
              </Typography>
              <Link href="/" hoversecondary>
                Open API
              </Link>
              <Typography color="GrayishBlue">
                Lorem ipsum maecenas malesuada diam ut netus id praesent conubia diam, neque porta
                ac facilisis proin mi molestie tempor erat.
              </Typography>
            </Paper>
          </Grid>

          <Grid paddingRight={20} width={20} className="mobileCard" textalign="initial">
            <Paper elevation={0}>
              <Img src="images/image-restaurant.jpg" width={100} />
              <Typography
                variant="h3"
                noWrap
                mr="medium"
                marginBottom={15}
                color="GrayishBlue"
                fontS="tiny"
              >
                texto pequeno
              </Typography>
              <Link href="/" hoversecondary>
                Open API
              </Link>
              <Typography color="GrayishBlue">
                Lorem ipsum maecenas malesuada diam ut netus id praesent conubia diam, neque porta
                ac facilisis proin mi molestie tempor erat.
              </Typography>
            </Paper>
          </Grid>
          <Grid paddingRight={20} width={20} className="mobileCard" textalign="initial">
            <Paper elevation={0}>
              <Img src="images/image-plane.jpg" width={100} />
              <Typography
                variant="h3"
                noWrap
                mr="medium"
                marginBottom={15}
                color="GrayishBlue"
                fontS="tiny"
              >
                texto pequeno
              </Typography>
              <Link href="/" hoversecondary>
                Open API
              </Link>
              <Typography color="GrayishBlue">
                Lorem ipsum maecenas malesuada diam ut netus id praesent conubia diam, neque porta
                ac facilisis proin mi molestie tempor erat.
              </Typography>
            </Paper>
          </Grid>
          <Grid paddingRight={20} width={20} className="mobileCard" textalign="initial">
            <Paper elevation={0}>
              <Img src="images/image-confetti.jpg" width={100} />
              <Typography
                variant="h3"
                noWrap
                mr="medium"
                marginBottom={15}
                color="GrayishBlue"
                fontS="tiny"
              >
                texto pequeno
              </Typography>
              <Link href="/" hoversecondary>
                Open API
              </Link>
              <Typography color="GrayishBlue">
                Lorem ipsum maecenas malesuada diam ut netus id praesent conubia diam, neque porta
                ac facilisis proin mi molestie tempor erat.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      {/* parte 4 */}
      <Footer />
    </Grid>
  );
}

export default App;
