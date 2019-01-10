import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import NotFound from "./components/notFound";
import Rentals from "./components/Rentals";
import Customers from "./components/customer";
// import "./App.css";
import "./index.css";
import MovieForm from "./components/movieForm";

import NavBar from "./components/navBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="containeer">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
