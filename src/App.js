import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    function formatName(user) {
      return `${user.firstName} ${user.lastName}`;
    }
    const hellowWorld = "Welcome to the Raod to learn React";
    const user = {
      firstName: "Charlie",
      lastName: "Brown",
    };

    return (
      <div className="App">
        <h2>{hellowWorld}</h2>
        <h2>{formatName(user)}</h2>
      </div>
    );
  }
}

export default App;
