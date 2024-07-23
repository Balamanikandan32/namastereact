import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   count: 0,
    //   count2: 0,
    userInfo : {
        name : "" ,
        location: "",
    }
    };
  }
  async componentDidMount(){
    const data = await fetch ("https://api.github.com/users/Balamanikandan32")
    const json = await data.json()
    this.setState({userInfo : json})
  }
  render() {
    // const { name, location } = this.props;
    // let { count, count2 } = this.state;
    const {name, location} = this.state?.userInfo
    return (
      <>
        {/* <h2>Count :{count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase counter
        </button> */}
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Contact : Linkedin - Balamanikandan</h3>
      </>
    );
  }
}

export default UserClass;
