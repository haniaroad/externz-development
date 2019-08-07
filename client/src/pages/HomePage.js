import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia
} from "@material-ui/core";
import { ImageHeader } from "../components";
import { ImageSearch } from "@material-ui/icons";
import Instructions from "../components/Instructions";

const companyData = [
  { key: 1, image: "", company: "", location: "" },
  { key: 2, image: "", company: "", location: "" },
  { key: 3, image: "", company: "", location: "" },
  { key: 4, image: "", company: "", location: "" }
];

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    display: "flex",
    overflow: "auto"
  },
  paper: {
    height: 140,
    width: 100
  },

  bizCont: {
    marginLeft: 20,
    paddingTop: 30,
    minHeight: "100vh"
  },
  headerText: {
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 40
  },
  instructions: {
    backgroundColor: "#f8f8ff ",
    paddingTop: "5%",
    paddingBottom: "5%"
  },
  gridCont: {
    height: "100%",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    [theme.breakpoints.down("sm", "xs")]: {
      padding: 0
    },
    display: "flex",
    flexDirection: "row"
  },

  gridContTwo: {
    height: "100%",
    paddingTop: 50,
    paddingBottom: 50,
    padding: 10,
    [theme.breakpoints.down("sm", "xs")]: {
      padding: 0
    },
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f8f8ff "
  },

  card: {
    borderRadius: 10,
    maxWidth: 320,
    [theme.breakpoints.between("xs", "sm")]: {
      maxWidth: 200
    },
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    transition: "0.3s"
  },
  media: {
    minHeight: 140,
    [theme.breakpoints.up("md", "lg")]: {
      height: 200,
      width: 300
    }
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 2
  },

  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  }
});

class HomePage extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    // const {} = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16} direction='column' justify='center'>
            <ImageHeader />
            {/* //Insert Content Here: */}
            <Grid className={classes.instructions} container>
              <Instructions />
            </Grid>

            <Grid
              alignItems='center'
              wrap='wrap'
              justify='center'
              className={classes.bizCont}
            >
              <Typography
                variant='h4'
                component='h4'
                color='inherit'
                className={classes.headerText}
                noWrap
              >
                EXTERN SEEKERS
              </Typography>

              <Grid
                container
                spacing={16}
                justify='center'
                direction={"row"}
                wrap='wrap'
                className={classes.gridCont}
              >
                {[0, 1, 2, 3, 4, 5].map((item, key) => (
                  <Card className={classes.card} key={item.key}>
                    <CardMedia
                      className={classes.media}
                      image={
                        "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                      }
                    />
                    <CardContent className={classes.content}>
                      <Typography
                        className={classes.heading}
                        variant={"h6"}
                        gutterBottom
                      >
                        Nature Around Us
                      </Typography>
                      <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                      >
                        We are going to learn different
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Grid>

              <Typography
                variant='h4'
                component='h4'
                color='inherit'
                className={classes.headerText}
                noWrap
              >
                EXTERN SEEKERS
              </Typography>
            </Grid>
            {/* //Ghoste White container */}
            <Grid
              container
              item
              xs={12}
              spacing={16}
              justify='center'
              direction={"row"}
              wrap='wrap'
              className={classes.gridContTwo}
            >
              {[0, 1, 2, 3, 4, 5].map((item, key) => (
                <Card className={classes.card} key={item.key}>
                  <CardMedia
                    className={classes.media}
                    image={
                      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                    }
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.heading}
                      variant={"h6"}
                      gutterBottom
                    >
                      Nature Around Us
                    </Typography>
                    <Typography
                      className={"MuiTypography--subheading"}
                      variant={"caption"}
                    >
                      We are going to learn different
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>

            {/* //End of Ghost White container */}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
