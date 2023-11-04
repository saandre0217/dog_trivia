import React from 'react';
import Table from 'react-bootstrap/Table';

function Leader(props) {
  return (

    <tbody>
      <tr>
        <th scope="row" className="leader-info">{`${props.leader.username} `}</th>
        <th scope="row" className="leader-info">{`${props.leader.questionCount} `}</th>
      </tr>
    </tbody>

  );
}
export default Leader;
