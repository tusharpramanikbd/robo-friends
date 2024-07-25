import { Component } from "react";

type ScrollProps = {
  children: React.ReactNode;
};
export class Scroll extends Component<ScrollProps> {
  render() {
    const { children } = this.props;

    return (
      <div
        style={{
          overflowY: "scroll",
          border: "1px solid black",
          height: "800px",
        }}
      >
        {children}
      </div>
    );
  }
}

export default Scroll;
