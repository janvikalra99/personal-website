import React from 'react'
import ProjectLayout from "../ProjectLayout"

class Speech extends React.Component {

  render(){
    const synopsis = [
      ["CHALLENGE", "Identify the part-of-speech of words in an inputted sentence"],
      ["RESULT", "96.4% accuracy when run on the Brown corpus of 36,000 words"],
      ["SKILLS", "Hidden Markov Models | Viterbi's Algorithm | Graphs, Maps, Priority Queues"],
      ["LOGISTICS", "Spring 2018 | Individual project | 450 lines | Java"]
    ]

    return(
      <ProjectLayout title="speech.tagger" synopsis={synopsis}></ProjectLayout>
    );
  }
}

export default Speech;
