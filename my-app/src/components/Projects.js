import React from 'react'
import ProjectLayout from './ProjectLayout'

class Projects extends React.Component {

  render(){
    const huffman = [
      ["GOAL", "compressing and decompressing a file"],
      ["SYNPOSIS", "Individual project | Spring 2018 | Java"],
      ["KEY SKILLS", "Trees, Maps, Priority Queues | File Input & Output | Implementing Huffman’s Alg*"],
      ["VALIDATION", "War & Peace novel (587,000 words) 3.2MB -> 1.8MB in 140 nanoseconds"]
    ]

    return(<ProjectLayout title="huffman encoding" synopsis={huffman}>
      </ProjectLayout>);
  }
}

export default Projects;
