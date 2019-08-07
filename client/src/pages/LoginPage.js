import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Tabs, Tab, AppBar, Typography } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { SignUp, SignIn } from "../components";
import logo from "../logo.svg";
import LoginInputForm from "../components/LoginComponent/index";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    alignItems: "flex-start",
    paddingTop: 100
  },
  paper: {
    height: 700,
    width: 500,
    padding: theme.spacing(2),
    textAlign: "center"
  },
  paperContent: {
    justifyContent: "center",
    textAlign: "center"
  },
  TabsCont: {
    backgroundColor: theme.palette.background.paper,
    width: 400
  },
  bigIndicator: {
    height: 3,
    backgroundColor: "#0066CC"
  },
  AppBar: {
    boxShadow: "none",
    overflow: "hidden",
    backgroundColor: "white"
  }
});

const TabContainer = ({ children, dir }) => {
  return (
    <Typography component='div' dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

class LoginPage extends Component {
  state = {
    direction: "row",
    tabIndex: 0
  };

  handleChange = (event, tabIndex) => {
    this.setState({ tabIndex });
  };

  handleChangeIndex = index => {
    this.setState({ tabIndex: index });
  };

  render() {
    const { classes, theme } = this.props;
    const { direction } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify='center'>
            {/* //Insert Content Here: */}

            <Paper className={classes.paper}>
              <div className={classes.paperContent}>
                <AppBar
                  position='static'
                  color='default'
                  class={classes.AppBar}
                >
                  <img
                    alt='pr-logo-ultd'
                    src={logo}
                    style={{ flex: 1, height: 30, marginBottom: 30 }}
                    resizeMode='contain'
                  />
                  <Tabs
                    value={this.state.tabIndex}
                    onChange={this.handleChange}
                    indicatorColor='primary'
                    textColor='primary'
                    centered
                    classes={{ indicator: classes.bigIndicator }}
                  >
                    <Tab label='Sign In' />
                    <Tab label='Student Sign Up' />
                    <Tab label='Company Sign Up' />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={this.state.tabIndex}
                  onChangeIndex={this.handleChangeIndex}
                >
                  <TabContainer dir={theme.direction}>
                    <LoginInputForm />
                  </TabContainer>
                  <TabContainer dir={theme.direction}>
                    <SignUp />
                  </TabContainer>
                </SwipeableViews>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(LoginPage);
