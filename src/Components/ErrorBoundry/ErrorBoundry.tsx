import React, { Component } from "react";

type ErrorBoundryProps = {
  children: React.ReactNode;
};

type ErrorBoundryState = {
  hasError: boolean;
};

export class ErrorBoundry extends Component<
  ErrorBoundryProps,
  ErrorBoundryState
> {
  constructor(props: ErrorBoundryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oppps. Error occured</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
