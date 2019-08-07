import React from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import clsx from "clsx";

const styles = theme => ({
  margin: {
    margin: theme.spacing(0)
  },
  textField: {
    flexBasis: 200
  },
  button: {
    backgroundColor: "#0066CC",
    width: "92.5%",
    height: 40,
    fontWeight: "bold"
  }
});

export const LoginForm = props => {
  const {
    values: { email, password },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    console.log(errors);
    setFieldTouched(name, true, false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            id='email'
            name='email'
            variant='outlined'
            style={{ width: "92.5%", marginBottom: 25 }}
            className={clsx(styles.margin, styles.textField)}
            helperText={touched.email ? errors.email : ""}
            error={touched.email && Boolean(errors.email)}
            label='Email'
            fullWidth
            value={email}
            onChange={change.bind(null, "email")}
          />
          <TextField
            id='password'
            name='password'
            helperText={touched.password ? errors.password : ""}
            error={touched.password && Boolean(errors.password)}
            className={clsx(styles.margin, styles.textField)}
            label='Password'
            variant='outlined'
            style={{ width: "92.5%", marginBottom: 25 }}
            type='password'
            value={password}
            onChange={change.bind(null, "password")}
          />

          <Button
            type='submit'
            variant='contained'
            disabled={!isValid}
            style={{
              backgroundColor: "#0066CC",
              width: "92.5%",
              height: 45,
              fontWeight: "bold"
            }}
          >
            Sign In
          </Button>
        </div>
      </form>
    </>
  );
};
