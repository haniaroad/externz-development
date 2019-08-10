import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppLayout from "../src/layout/AppLayout";
import { HomePage, LoginPage } from "../src/pages";
import Footer from "../src/components/Footer";

function App() {
  return (
    <Router>
      <AppLayout>
        <Route exact path='/' component={HomePage} />
      </AppLayout>
      {/* <Route exact path='/' component={LoginPage} /> */}
    </Router>
  );
}

export default App;
