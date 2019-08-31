import React from 'react';
import '../styles/Project.scss';

class ProjectLayout extends React.Component {

// this should be a map. {challenge: value, skills: value}
// why is it all sideways?
  render() {
    return (
      <div class="synopsis">
        <table id="synposisTable">
          <tbody>
            <tr>
              <td> Challenge </td>
              <td> {this.props.challenge} </td>
            </tr>
            <tr>
              <td> Skills </td>
              <td> {this.props.skills} </td>
            </tr>
            <tr>
              <td> Logistics </td>
              <td> {this.props.logistics} </td>
            </tr>
            <tr>
              <td> Results </td>
              <td> {this.props.results} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProjectLayout;
