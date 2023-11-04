/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Leader from './Leader.jsx';

function LeaderBoard() {
  const [leaders, setLeaders] = useState([]);

  function getLeaders(endpoint) {
    axios.get(`/leaderboard/${endpoint}`)
      .then(({ data }) => {
        setLeaders(data); // sets leaders to data property from User query obj
      })
      .catch((err) => console.error('getLeaders ERROR (client):', err));
  }
  return (
    <div>
      Leaderboard
      <Button onClick={() => getLeaders('smartest')}>Smartest Parents</Button>
      {leaders.map((leaderObj) => (
        <Leader
          leader={leaderObj}
          key={leaderObj._id}
        />
      ))}
    </div>
  );
}

export default LeaderBoard;
