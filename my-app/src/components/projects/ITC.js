import React from 'react'
import ProjectLayout from "../ProjectLayout"

class ITC extends React.Component {

  render(){
    const synopsis = [
      ["CHALLENGE", "Create a Canvas LTI that divides students into optimal groups by ensuring groupmates are compatible and minorities are not isolated."],
      ["RESULT", "Prototyped a React on Rails Canvas LTI that will be available to every Dartmouth professor after one more iteration."],
      ["LOGISTICS", "Spring 2019 | 3 developers | React.js"],
      ["ROLE", "Coded the student-side and professor-side user interfaces"],
    ]

    return(
      <ProjectLayout title="optimal.team.formation" synopsis={synopsis}></ProjectLayout>
    );
  }
}

export default ITC;
