import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { LoginForm } from "./LoginForm";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px`
  },
  container: {
    maxWidth: "200px",
    marginTop: 50
  }
});

const validationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("")
    .min(8, "Password must be 8 characters and include one capital letter")
    .required("Enter your password")
});

class StuRegForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  submitValues = ({ email, password }) => {
    console.log({ email, password });
  };

  render() {
    const { email } = this.state;
    const values = {
      email: email,
      password: ""
    };
    return (
      <React.Fragment>
        <div style={styles.container}>
          <Formik
            render={props => <LoginForm {...props} />}
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={this.submitValues}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(StuRegForm);
