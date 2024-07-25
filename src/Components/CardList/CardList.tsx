import { Component } from "react";
import Card from "../Card/Card";
import { Robot } from "../../App";

type CardListProps = {
  robots: Robot[];
};

export class CardList extends Component<CardListProps> {
  render() {
    return (
      <>
        {this.props.robots?.map((robot) => (
          <Card key={robot.id} {...robot} />
        ))}
      </>
    );
  }
}

export default CardList;
