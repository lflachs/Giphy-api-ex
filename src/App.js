import React from "react";
import "./App.css";
import GifList from "./Components/GifLists";
import logo from "./img/logo.svg";
import SearchBar from "./Components/SearchBar";

// OD3oGfqxgGh8SZtwK6u0XHQtkSQef8N4

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: undefined,
      query: "lol cats"
    };
  }

  componentDidMount() {
    this.handleLoadGifs(this.state.query);
  }

  // function that load the gifs
  handleLoadGifs = query => {
    const apiKey = "OD3oGfqxgGh8SZtwK6u0XHQtkSQef8N4";
    console.log("load gifs");
    fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`
    )
      .then(res => res.json())
      .then(results => {
        this.setState({
          gifs: results.data
        });
      });
  };

  // function that manage the user input
  onInputChange = event => {
    this.setState({
      query: event.target.value
    });
  };

  //function manage the click
  onSearchClick = () => {
    this.handleLoadGifs(this.state.query);
  };

  render() {
    const { gifs } = this.state;
    return (
      <div>
        <header className="main-header">
          <img className="logo" src={logo} alt="logo" />
          <SearchBar
            onInputChange={this.onInputChange}
            onSearchClick={this.onSearchClick}
          />
        </header>

        {gifs ? <GifList gifs={gifs} /> : console.log("loading...")}
      </div>
    );
  }
}

export default App;
