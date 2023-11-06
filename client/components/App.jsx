import React from 'react';
import Button from 'react-bootstrap/Button';

import Quiz from './Quiz.jsx';
import axios from 'axios';
import Achievements from '../components/Achievements.jsx';
import SearchUser from './SearchUser.jsx';

import '../app.css'; // imports css to apply to all components in App component
import LeaderBoard from './Leaderboard.jsx';

function App() {
  return (
    <div>
      <div>APP RENDERING</div>
      <Button>Bootstrap Buttons</Button>
      <SearchUser />
      <Quiz />

      <Achievements />

      <LeaderBoard />
    </div>
  );
}

export default App;