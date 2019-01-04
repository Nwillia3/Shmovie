import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";

class App extends Component {
  render() {
    return (
      <main className="containeer">
        <Movies />
      </main>
    );
  }
}

export default App;
