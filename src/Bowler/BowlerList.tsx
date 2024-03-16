import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5290/Bowler');
      const f = await rsp.json();
      setBowlerData(f);
    };
    fetchBowlerData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <br />
          <h3 className="col-12 text-center">Bowling League Members</h3>
        </div>
        <table className="table table-bordered">
          <br />
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
            {bowlerData.map(
              (f) =>
                (f.TeamName === 'Marlins' || f.TeamName === 'Sharks') && (
                  <tr key={f.BowlerId}>
                    <td>
                      {f.BowlerFirstName} {f.BowlerMiddleInit}{' '}
                      {f.BowlerLastName}
                    </td>
                    <td>{f.BowlerAddress}</td>
                    <td>{f.BowlerCity}</td>
                    <td>{f.BowlerState}</td>
                    <td>{f.BowlerZip}</td>
                    <td>{f.BowlerPhone}</td>
                    <td>{f.TeamName}</td>
                  </tr>
                ),
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BowlerList;

//
//const fetchTeamData = async () => {
//  const teamResponse = await fetch(
//    'https://localhost:44364/BowlingLeague/Teams',
//  );
//  const teams = await teamResponse.json();
//  setTeamData(teams);
//}; //I have one of these bad boys for the Bowler info from the Bowler table too
//get the team name by teamID
//const getTeamName = (teamId: any) => {
//const team = teamData.find((t) => t.teamId === teamId);
//return team ? team.teamName : 'Unknown'; //return unknown if cant find a match
//};
