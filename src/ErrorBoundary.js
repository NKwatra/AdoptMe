import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("Error from ErrorBoundary: ", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError)
      setTimeout(() => this.setState({ redirect: true }), 5000);
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          Some error Occured, please <Link to="/">click here</Link> to go back
          to homepage
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
