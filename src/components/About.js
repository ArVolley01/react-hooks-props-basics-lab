import React from "react";
import Links from "./Links";

const ifBio = (bio) => {
  if (bio === '' || bio === undefined) {
    return null
  } else {
    return (
      <p>{bio}</p>
    )
  }
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {ifBio(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin = {props.linkedin}/>
    </div>
  );
}

export default About;
