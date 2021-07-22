import React, { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";

class App extends Component {
  state = {
    imageName: "",
  };
  handleFormSubmit = (imageName) => {
    console.log(imageName);
    this.setState({ imageName });
  };

  render() {
    return (
      <div>
        <Searchbar
          onSubmit={this.handleFormSubmit}
          // onHandleChange={this.handleNameChange}
        />
      </div>
    );
  }
}

export default App;
