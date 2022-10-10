import React, { Component } from "react";
class AddJoks extends Component {
  state = { name: null, age: null, color: null };
  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.props.addData(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handelSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="validate"
            onChange={this.handelChange}
          />
          <label htmlFor="name">Age</label>
          <input
            type="text"
            id="age"
            className="validate"
            onChange={this.handelChange}
          />
          <label htmlFor="name">Color</label>
          <input
            type="text"
            id="color"
            className="validate"
            onChange={this.handelChange}
          />
          <button class="waves-effect waves-light btn-large">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddJoks;
