import React from "react";
import API from "../utils/API";

class JSXVariables extends React.Component {
  state = {
    employee: [],
  };

  componentDidMount() {
    API.fetchUsers().then((results) => {
      console.log(results);
      this.setState({ employee: results.data.results });
    });
  }
  consoleComponent() {
    console.log(this.state.employee);
  }

  render() {
    return (
      <div>
        <h1>Employee Directory</h1>
        <button onClick={this.consoleComponent.bind(this)}>
          Test the State
        </button>
        {
          <table>
            <tbody>
              <tr>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
              {this.state.employee.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.picture.thumbnail}
                      alt="employee image"
                    ></img>
                  </td>
                  <td>{item.name.first}</td>
                  <td>{item.name.last}</td>
                  <td>{item.email}</td>
                  <td>{item.cell}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    );
  }
}
export default JSXVariables;
