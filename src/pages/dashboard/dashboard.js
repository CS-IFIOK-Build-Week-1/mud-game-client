import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import Controls from '../../components/controls/controls';
import World from '../../components/world';


const DashCon = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RightCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GameInfoCon = styled.div`
  border: 4px solid #08E152;
  width: 350px;
  height: 230px;
`;


const UserDashboard = () => {

  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }


  return (
    <DashCon>
      <World />

      <RightCon>
        <GameInfoCon>
          <p>Game Room Info</p>
        </GameInfoCon>

        <Controls />
      </RightCon>
    </DashCon>
  );
};

export default UserDashboard;
