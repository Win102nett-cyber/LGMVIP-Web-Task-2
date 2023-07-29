/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;*/
import Users from "./components/userCard";
import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: true };
    this.showUsers = this.showUsers.bind(this);
  }

  showUsers() {
    document.getElementById("main").style.display = "flex";
    const source = "https://reqres.in/api/users?page=1";
    fetch(source)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark  m-3">

          <div className="container">
           <span>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt62swN9cP_oH7G1pSCL4RQwbiMzIHjmU0Eg&usqp=CAU" alt="Logo " />
             <h1>React User Grid Card</h1>
            </span>
            <button onClick={this.showUsers}>Click to Get Users</button>
          </div>
        </nav>

        <Users loading={this.state.loading} users={this.state.users_data} />
      </>
    );
  }
}

export default App;

