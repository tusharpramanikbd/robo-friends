import { Component } from "react";
import { Robot } from "../../App";

export class Card extends Component<Robot> {
  render() {
    const { name, email } = this.props;

    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
        <img src={`https://robohash.org/${name}?200x200`} alt="robot" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
