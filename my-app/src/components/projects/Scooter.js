import React from 'react'
import ProjectLayout from "../ProjectLayout"

class Scooter extends React.Component {

  render(){
    const synopsis = [
      ["CHALLENGE", "Revamped an automated system that runs performance tests on 2000 machines."],
      ["RESULT", "Runs X test by X Users."],
      ["LOGISTICS", "Summer 2019 | Google's Search backend team | 4000 lines | Golang, Javascript, Polymer.js"],
      ["TASK ONE", "Created metrics to track usage analytics of systems under test"],
      ["TASK TWO", "Developed a full-stack webapp to monitor test consisting of a backend server that queries Spanner using RPCs, protocol buffers and a user-interface"],
      ["TASK THREE", "Developed multithreaded application to rebuild test packages close to expiry"],
    ]

    return(
      <ProjectLayout title="Google.Scooter" synopsis={synopsis}></ProjectLayout>
    );
  }
}

export default Scooter;
