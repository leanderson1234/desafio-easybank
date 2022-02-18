import { Menu, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import IconButton from '../../../iconbutton';
import Typography from '../../../typography';
import Toolbar from '../../../toolbar';
import Button from '../../../button';
import Grid from '../../../grid';
import Img from '../../../img';
import Link from '../../../link';
import AppBar from '../../../appbar';

const StyledMenuItem = withStyles(() => ({
  root: {
    top: '0px',
  },
}))(Menu);
const Navegation = () => {
  const [showmenu, setshowmenu] = useState(false);
  const onshow = () => setshowmenu(!showmenu);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item lg={1}>
            <Img src="/images/logo.svg" alt="imagem da logo" />
          </Grid>
          <IconButton color="primary" onClick={onshow}>
            <MenuIcon color="action" fontSize="large" />
          </IconButton>
          <Grid showMenu={showmenu} className="containerMobile">
            <StyledMenuItem
              id="menu_mobile"
              elevation={0}
              anchorEl={showmenu}
              keepMounted
              open={Boolean(showmenu)}
              onClose={onshow}
              PaperProps={{
                style: {
                  width: '30ch',
                },
              }}
            >
              <MenuItem onClick={onshow}>
                <Typography variant="h6" mr="medium" fontS="tiny" menu>
                  <Link href="/" color="DarkBlue">
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={onshow}>
                <Typography variant="h6" mr="medium" fontS="tiny" menu>
                  <Link href="/" color="DarkBlue">
                    Abaut
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={onshow}>
                <Typography variant="h6" mr="medium" fontS="tiny" menu>
                  <Link href="/" color="DarkBlue">
                    Contact
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={onshow}>
                <Typography variant="h6" mr="medium" fontS="tiny" menu>
                  <Link href="/" color="DarkBlue">
                    Blog
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={onshow}>
                <Typography variant="h6" mr="medium" fontS="tiny" menu>
                  <Link href="/" color="DarkBlue">
                    Careers
                  </Link>
                </Typography>
              </MenuItem>
            </StyledMenuItem>
          </Grid>
          <Grid container item lg={7} justify="center" className="menumobilenone">
            <Typography variant="h6" mr="medium" fontS="tiny" menu>
              <Link href="/" color="DarkBlue">
                Home
              </Link>
            </Typography>
            <Typography variant="h6" mr="medium" fontS="tiny" menu>
              <Link href="/">Abaut</Link>
            </Typography>
            <Typography variant="h6" mr="medium" fontS="tiny" menu>
              <Link href="/">Contact</Link>
            </Typography>
            <Typography variant="h6" mr="medium" fontS="tiny" menu>
              <Link href="/">Blog</Link>
            </Typography>
            <Typography variant="h6" mr="medium" fontS="tiny" menu>
              <Link href="/">Careers</Link>
            </Typography>
          </Grid>
          <Grid item lg={2} container justify="center" className="menumobilenone">
            <Button>Request Invite</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navegation;
