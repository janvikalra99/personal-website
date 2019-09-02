import React from 'react'
import ProjectLayout from "../ProjectLayout"

class Bacon extends React.Component {

  render(){
    const synopsis = [
      ["CHALLENGE", "Find the degree of separation between any two celebrities"],
      ["SKILLS", "Implementing Graph library | Recursion | Handling user input | Parsing text files"],
      ["LOGISTICS", "Spring 2018 | Individual project | 500 lines | Java"]
    ]

    return(
      <ProjectLayout title="bacon.number.calculator" synopsis={synopsis}></ProjectLayout>
    );
  }
}

export default Bacon;
