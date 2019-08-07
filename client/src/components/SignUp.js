import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import { InputAdornment, TextField, IconButton } from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";

const styles = theme => ({
  margin: {
    margin: theme.spacing(0)
  },
  textField: {
    flexBasis: 200
  }
});

export class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    company: "",
    showPassword: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = values => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <div
          style={{
            flex: 1,
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "content",
            alignItems: "center"
          }}
        >
          <TextField
            id='outlined-name'
            style={{ marginLeft: 5, width: "46%" }}
            className={clsx([styles.margin, styles.textField])}
            variant='outlined'
            label='Fiirst Name'
            value={this.state.firstName}
            onChange={this.handleChange("firstName")}
            helperText='Fist Name'
          />

          <TextField
            id='outlined-name'
            style={{ marginLeft: 5, width: "46%" }}
            className={clsx(styles.margin, styles.textField)}
            variant='outlined'
            label='Last Name'
            value={this.state.lastName}
            onChange={this.handleChange("lastName")}
            helperText='Last Name'
          />
          <TextField
            id='outlined-name'
            style={{ width: "92.5%" }}
            className={clsx(styles.margin, styles.textField)}
            variant='outlined'
            label='Last Name'
            value={this.state.lastName}
            onChange={this.handleChange("lastName")}
            helperText='Last Name'
          />
        </div>
      </>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
