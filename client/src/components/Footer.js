import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function MadeWithLove() {
  return (
    <Typography variant='body2' color='textSecondary'>
      {"Built with love by the "}
      <Link color='inherit' href='https://material-ui.com/'>
        Material-UI
      </Link>
      {" team."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 40
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  footer: {
    padding: theme.spacing(1),
    backgroundColor: "white"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container
          component='main'
          fixed='true'
          className={classes.main}
          maxWidth='sm'
        >
          <Typography variant='h2' component='h1' gutterBottom>
            Sticky footer
          </Typography>
        </Container>
        <Container maxWidth='sm'>
          <Typography variant='body1'>
            My sticky footer can be found here.
          </Typography>
          <MadeWithLove />
        </Container>
      </footer>
    </div>
  );
}
