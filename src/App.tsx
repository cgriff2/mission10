import React from 'react';
import './App.css';
import Header from './Header';

function BowlerList() {
  return (
    <>
      <h3>Bowling League Members</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <BowlerList />
    </div>
  );
}

export default App;
