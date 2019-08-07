import React from "react";
import { TextField, Button } from "@material-ui/core";

class LoginForm extends React.Fragment {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    console.log(this.state);
    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = () => {
      const user = this.state;
      API.login(user).then(data => console.log(data));
    };

    return (
      <>
        <form onSubmit={() => this.handleSubmit()}>
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
              name="email"
              variant="outlined"
              style={{ width: "92.5%", marginBottom: 25 }}
              className={clsx(styles.margin, styles.textField)}
              label="Email"
              fullWidth
              onChange={e => console.log(e.target.value)}
            />
            {/* <TextField
              id="password"
              name="password"
              helperText={touched.password ? errors.password : ""}
              error={touched.password && Boolean(errors.password)}
              className={clsx(styles.margin, styles.textField)}
              label="Password"
              variant="outlined"
              style={{ width: "92.5%", marginBottom: 25 }}
              type="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            /> */}

            <Button
              type="submit"
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "#0066CC",
                width: "92.5%",
                height: 40,
                fontWeight: "bold"
              }}
              disabled={!isValid}
            >
              Sign In
            </Button>
          </div>
        </form>
      </>
    );
  }
}
