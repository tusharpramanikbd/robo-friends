import { Component, ChangeEvent } from "react";
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";
import "./App.css";
import Scroll from "./Components/Scroll/Scroll";
import ErrorBoundry from "./Components/ErrorBoundry/ErrorBoundry";
import { getData } from "./Utils/fetchUtils";

type State = {
  robots: any[];
  searchField: string;
};

export type Robot = {
  id: string;
  name: string;
  email: string;
};

export class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      try {
        const users = await getData<Robot[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.setState({ robots: users });
      } catch (error) {
        console.error("Data fetching Error: " + error);
      }
    };

    fetchData();
  }

  onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
