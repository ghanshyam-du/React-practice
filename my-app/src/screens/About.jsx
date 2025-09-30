import React from "react";
import List from "../components/List";
import Titles from "../components/Titles";

// function About=()=>{
//     return <>
//     <h1>This is About page!</h1>
//     </>
// }

const About = ()=>{
    return <>
    <div>
        <Titles name = "About"/>
          <h1>This is About page!</h1>
          <List/>
          <Titles name="about2"/>
          <Titles name = "about3"/>
         
    </div>
  
    </>
}
export default About;