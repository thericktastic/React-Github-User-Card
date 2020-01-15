import React, { Component } from "react";
import UserCard from "./components/UserCard";
import axios from "axios";
import "./App.css";

class App extends Component {
  // This constructor function initializes state as
  // an empty array for userData
  constructor() {
    console.log("Constructor invoked!");
    super();
    this.state = {
      userData: [],
      followerData: []
    };
  }

  // This code makes an api call to GitHub
  // for my user info.
  // Then it sets state by storing res.data
  // in the userData array.
  // res.data should be an object with the
  // necessary user info from GitHub.
  componentDidMount() {
    console.log("cDM invoked!");
    axios
      .get("https://api.github.com/users/thericktastic")
      .then(res => {
        this.setState({
          userData: res.data
        });
        console.log("This is res.data for user: ", res.data);
      })
      .catch(err =>
        console.log("re: userData - You failed, here's why: ", err)
      );

    axios
      .get("https://api.github.com/users/thericktastic/followers")
      .then(res => {
        this.setState({
          followerData: res.data
        });
        console.log("This is res.data for followers: ", res.data);
      })
      .catch(err =>
        console.log("re: followerData - You failed, here's why: ", err)
      );
  }

  // This code renders the UserCard component and
  // passes state down to the UserCard component.
  render() {
    console.log("App renders");
    return (
      <div>
        <h1>The Humble One</h1>
        <div className="humble-container">
          <UserCard
            login={this.state.userData.login}
            avatar={this.state.userData.avatar_url}
          />
        </div>
        <h2>The Humble One's Unwavering Disciples</h2>
        <div className="follower-container">
          {this.state.followerData.map(follower => {
            console.log(`Follower is: `, follower);
            return (
              <UserCard
                props={follower}
                key={follower.id}
                login={follower.login}
                avatar={follower.avatar_url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

// {this.state.followerData.map(
//   <UserCard login={this.state.followerData.login} />
// )}
