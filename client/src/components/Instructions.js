import React, { Component } from "react";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  Grid
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const tiers = [
  {
    title: "Become an Extern",
    price: "0",
    image: "https://source.unsplash.com/random",

    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support"
    ]
  },
  {
    title: "Become an Extern",
    price: "15",
    image: "https://source.unsplash.com/random",

    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support"
    ]
  },
  {
    title: "Hire an Intern",
    price: "30",
    image: "https://source.unsplash.com/random",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support"
    ]
  }
];

const styles = theme => ({
  root: {
    width: "100%"
  },
  cardHeader: {
    backgroundColor: "#0066CC",
    color: "white"
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  },
  headerText: {
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 40,
    textAlign: "center"
  },
  cardMedia: {
    paddingTop: "56.25%",
    width: "100%"
  }
});

class Instructions extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container maxWidth='md' component='main' className={classes.root}>
          <Typography
            variant='h4'
            component='h4'
            color='inherit'
            className={classes.headerText}
          >
            BOOK AN EXTERNS
          </Typography>
          <Grid container spacing={5} alignItems='flex-end'>
            {tiers.map(tier => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={12} md={4}>
                <Card style={{ borderRadius: 8 }}>
                  <CardHeader
                    title={tier.title}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <CardMedia
                      className={classes.cardMedia}
                      image={tier.image}
                      title='Image title'
                    />
                    <div className={classes.cardPricing}>
                      <Typography
                        component='h2'
                        variant='h3'
                        color='textPrimary'
                      >
                        ${tier.price}
                      </Typography>
                    </div>
                    <ul>
                      {tier.description.map(line => (
                        <Typography
                          component='li'
                          variant='subtitle1'
                          align='center'
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(Instructions);
