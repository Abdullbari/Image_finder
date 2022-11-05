import React, { Component } from "react";
import axios from "axios";
import { createPortal } from "react-dom";
const myBar = document.getElementById("header");
export default class Searchbar extends Component {
  state = {
    query: "",
  };
  onSubmit = (e) => {
    const query = this.state.query;

    e.preventDefault();

    this.props.onSubmit(query);

    this.setState(this.props.onSubmit(query));

    this.reset();
  };
  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };
  reset = (e) => {
    this.setState({ query: "" });
  };
  render() {
    return createPortal(
      <div className="searchbar">
        <form className="searchForm" onSubmit={this.onSubmit}>
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className="searchForm-input"
            type="text"
            value={this.state.query}
            autoomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </div>,
      myBar
    );
  }
}
