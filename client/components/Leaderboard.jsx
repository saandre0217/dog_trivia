import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

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
      {console.log(leaders)}
      Leaderboard
      <Button onClick={() => getLeaders('smartest')}>Smartest Parents</Button>
    </div>
  );
}

export default LeaderBoard;
