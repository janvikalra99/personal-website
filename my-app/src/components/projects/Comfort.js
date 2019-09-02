import React from 'react'
import ProjectLayout from "../ProjectLayout"

class Comfort extends React.Component {

  render(){
    const synopsis = [
      ["CHALLENGE", "Regulate an air conditioner's thermostat based on the comfort of those in the room"],
      ["RESULT", "Prototyped a wearable and presented at 2016 Apple Education Leadership Camp"],
      ["SKILLS", "AC control mechanisms | Arduino circuitry"],
      ["LOGISTICS", "Summer 2016 | Individual project | Arduino, C"],
      ["MENTOR", "Mr. Sean Sabastian, Mechatronics Engineer, provided instrumental guidance"],
    ]

    return(
      <ProjectLayout title="controlling.comfort" synopsis={synopsis}></ProjectLayout>
    );
  }
}

export default Comfort;
