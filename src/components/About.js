
import UserClass from "./UserClass";
import React, { Component } from "react";
class About extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  render(){
    return (
      <div className = "m-4">
        <h1>About us page</h1>
        <UserClass />
      </div>
    );
  }
}
export default About;
