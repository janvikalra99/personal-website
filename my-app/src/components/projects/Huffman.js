import React from 'react'
import ProjectLayout from "../ProjectLayout"

class Huffman extends React.Component {

  render(){
    const synopsis = [
      ["CHALLENGE", "Compress and decompress a file"],
      ["SKILLS", "Trees, Maps, Priority Queues | File I/O | Huffman’s Algorithm"],
      ["RESULT", "Compressed the 587,000 word War & Peace novel from 3.2MB to 1.8MB in 140ns"],
      ["LOGISTICS", "Spring 2018 | Individual project | 300 lines | Java"]
    ]

    return(
      <ProjectLayout title="huffman.encoding" synopsis={synopsis}></ProjectLayout>
    );
  }
}

export default Huffman;
