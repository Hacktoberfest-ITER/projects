import Users from "./Elements/native.js";
import "./App.css";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: true };

    // Binding this keyword
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    console.log("VT");
    document.getElementById("main").style.display = "flex";
    const link = "https://reqres.in/api/users";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="container-fluid">
            <h3 className="topHead">LetsGrowMore VIP TASK-2</h3>
            <button onClick={this.updateState}>Get Users</button>
          </div>
        </nav>
        <div className="home_page">
          <h1 className="welcomeHead">Welcome to my page!</h1>
          <br></br>
          <h2 className="tempHead">Click on GetUsers to get the information about users</h2>
        </div>
        <Users loading={this.state.loading} users={this.state.users_data} />
      </>
    );
  }
  // function App() {
  //   return (
  //     <div className="App">
  //       <h2>Welcome to REACT</h2>
  //     </div>
  //   );
}

export default App;
