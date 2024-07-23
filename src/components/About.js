
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  render(){
    return (
      <>
        <h1>About us page</h1>
        <UserClass />
      </>
    );
  }
}
export default About;
