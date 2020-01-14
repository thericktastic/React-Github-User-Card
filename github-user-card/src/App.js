import React, { Component } from "react";
import UserCard from './components/UserCard';
import axios from "axios";
import "./App.css";

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      userData: []
    }
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/thericktastic")
      .then(res => {
        this.setState({
          userData: res.data
        });
        console.log("This is res.data: ",res.data);
      })
      .catch(err => console.log("You failed, here's why: ", err));
  }

  render() {
    return (
      <div>
        <p>T</p>
        <UserCard login={this.state.userData.login} />
      </div>
    );
  }
}

export default App;
