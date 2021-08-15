import React from "react";
import unsplash from "./axios/unsplash";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import "./styles.css";

class App extends React.Component {
  state = { searchImages: [] };

  onSearchSubmit = async (searchTerm) => {
    // options for API GET request
    const axiosGetOptions = {
      params: {
        query: searchTerm
      }
    };

    const response = await unsplash.get(`/search/photos`, axiosGetOptions);

    if (response.status === 200) {
      this.setState({ searchImages: response.data.results });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="ui container" style={{ margin: `5%` }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.searchImages} />
        </div>
      </div>
    );
  }
}

export default App;
