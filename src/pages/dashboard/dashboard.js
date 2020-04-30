import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import MapCanvas from '../../components/map-canvas';
import Controls from '../../components/controls/controls';

const DashCon = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 600px;
`;

const RightCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
`;

const GameInfoCon = styled.div`
  border: 4px solid #08e152;
  width: 400px;
  height: 280px;
`;

const UserDashboard = (props) => {
  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }

  return (
    <DashCon>
      <MapCanvas />

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
