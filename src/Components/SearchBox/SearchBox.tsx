import { ChangeEventHandler, Component } from "react";

type SearchBoxProps = {
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
};

export class SearchBox extends Component<SearchBoxProps> {
  render() {
    const { onSearchChange } = this.props;

    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="Search robots..."
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
