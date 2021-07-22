import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    imageName: "",
  };

  handleNameChange = (evt) => {
    this.setState({ imageName: evt.currentTarget.value.toLowerCase() });
    console.log("curr target", evt.currentTarget.value.toLowerCase());
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    if (this.state.imageName.trim() === "") {
      alert("Enter something in the search field");
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
            value={this.state.imageName}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
