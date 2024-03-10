import React, { Component } from "react";
import Card from "../Card/Card";

export class CardList extends Component {
  render() {
    return (
      <>
        {this.props.robots?.map((robot) => (
          <Card key={robot.key} {...robot} />
        ))}
      </>
    );
  }
}

export default CardList;
