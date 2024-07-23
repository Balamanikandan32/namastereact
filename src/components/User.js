import { useState } from "react";

const User =(props) => {
    const [count, setCount] =useState(0)
    const [count2, setCount2] = useState(0)
    const {name ,location} =props
    return(
        <>
        <h2>Count : {count}</h2>
        <h2>Count2 : {count2}</h2>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Functional Component</h3>
        </>
    )
}

export default User;