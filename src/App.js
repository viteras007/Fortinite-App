import React, { Component } from 'react';
import './App.css';
import Fortnite from './Fortnite/Fortnite';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isName: false,
      username: '',
      fieldname: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ fieldname: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ username: this.state.fieldname });
    this.setState({ isName: true });
    event.preventDefault();
  }

  renderizando(first) {
    if (this.state.isName) {
      return (<div>
        <Fortnite username={this.state.username} />
      </div>)
      this.setState({ username: '' });
    }
  }
  render() {
    return (
      <div>
        <div className="titleBox">
          <div className='title'>
            <h1>FORTNITE TRACKER</h1>
          </div>
        </div>
        <div className='searchbox'>
          <form onSubmit={this.handleSubmit}>
            <label className='label-username'>
              USERNAME:
            </label>
            <input type="text" name="name" onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
          {this.renderizando()}
        </div>
      </div>
    );
  }
}

export default App;