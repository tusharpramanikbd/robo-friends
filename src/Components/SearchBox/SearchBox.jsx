import React, { Component } from "react";

export class SearchBox extends Component {
  render() {
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="Search robots..."
          onChange={this.props.onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
