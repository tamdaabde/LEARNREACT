import React, { Component } from "react";
import Joker from "./joker";
import AddJoks from "./fomjok";
class App extends Component {
  state = {
    joks: [
      { name: "abde", age: 37, color: "blue", id: 1 },
      { name: "mery", age: 27, color: "red", id: 2 },
      { name: "loujaine", age: 1, color: "pink", id: 3 },
    ],
  };
  handelData = (jok) => {
    jok.id = Math.floor(Math.random() * 10);
    let data = [...this.state.joks, jok];
    this.setState({ joks: data });
  };
  deleteData = (id) => {
    let deleteD = this.state.joks.filter((d) => {
      return d.id !== id;
    });
    this.setState({ joks: deleteD });
  };
  render() {
    return (
      <div className="app">
        <h2 className="center">information's Family</h2>
        <Joker joks={this.state.joks} delData={this.deleteData} />
        <AddJoks addData={this.handelData} />
      </div>
    );
  }
}

export default App;
