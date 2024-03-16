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
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone</th>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>
            {bowlerData.map(
              (f) =>
                (f.teamName === 'Marlins' || f.teamName === 'Sharks') && (
                  <tr key={f.bowlerId}>
                    <td>
                      {f.bowlerFirstName} {f.bowlerMiddleInit}{' '}
                      {f.bowlerLastName}
                    </td>
                    <td>{f.bowlerAddress}</td>
                    <td>{f.bowlerCity}</td>
                    <td>{f.bowlerState}</td>
                    <td>{f.bowlerZip}</td>
                    <td>{f.bowlerPhoneNumber}</td>
                    <td>{f.teamName}</td>
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
