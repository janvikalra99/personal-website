import React from 'react';
import '../styles/ProjectLayout.scss';

class ProjectLayout extends React.Component {
  render() {
    // Parse the list of project information passed in.
    const keys = this.props.synopsis.map((line) =>
      <div>{line[0]}</div>
    );
    const values = this.props.synopsis.map((line) =>
      <div>{line[1]}</div>
    );

    return (
        <div id="project-layout">
          <div id="synopsis">
            <div class="keys"> {keys} </div>
            <div class="values"> {values} </div>
          </div>
          <div id="title">{this.props.title}</div>
        </div>
    );
  }
}

export default ProjectLayout;
