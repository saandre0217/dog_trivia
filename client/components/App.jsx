import React from 'react';
import Button from 'react-bootstrap/Button';

import '../app.css'; // imports css to apply to all components in App component
import LeaderBoard from './Leaderboard.jsx';

function App() {
  return (
    <div>
      <div>APP RENDERING</div>
      <Button>Bootstrap Button</Button>
      <LeaderBoard />
    </div>
  );
}

export default App;
