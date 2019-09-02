import React from 'react'
import ProjectLayout from "../ProjectLayout"

class Theraband extends React.Component {

  render(){
    const synopsis = [
      ["CHALLENGE", "Monitor physiotherapy exercise performance for elderly patients with Sarcopenia to track patient progress and research exercise effectiveness."],
      ["RESULT", "Shipped an Android App used by X patients at Geisel Medical School."],
      ["LOGISTICS", "Winter 2019 | 3 developers | Java, CSS"],
      ["ROLE", "Coded user interface"],
    ]

    return(
      <ProjectLayout title="track.physiotherapy.exercises" synopsis={synopsis}></ProjectLayout>
    );
  }
}

export default Theraband;
