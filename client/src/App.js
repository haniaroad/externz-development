import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { HomePage, LoginPage } from "./pages";
import Footer from "./components/Footer";

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
