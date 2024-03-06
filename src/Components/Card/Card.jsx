import React, { Component } from "react";

export class Card extends Component {
  constructor(props) {
    super(props);
    const { username, name, email } = props;
    this.name = name;
    this.email = email;
    this.username = username;
  }

  render() {
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
        <img
          src={`https://robohash.org/${this.username}?200x200`}
          alt="robot"
        />
        <div>
          <h2>{this.name}</h2>
          <p>{this.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
