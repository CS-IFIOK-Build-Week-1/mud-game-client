import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import PixiApp from "../../components/map/pixi-app";
import Controls from "../../components/controls/controls";
import { useDispatch } from "react-redux";
import RoomInfo from "../../components/RoomInfo";

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
  overflow: scroll;
`;

const UserDashboard = (props) => {
  const [map, setMap] = useState([]);
  const [currentRoomData, setcurrentRoomData] = useState({ x: 0, y: 0 });
  const dispatch = useDispatch();
  useEffect(() => {
    Promise.all([
      axiosWithAuth().get(
        "https://calm-headland-63030.herokuapp.com/api/adv/rooms"
      ),
      axiosWithAuth().get(
        "https://calm-headland-63030.herokuapp.com/api/adv/init"
      ),
    ])
      .then(([resRooms, resCurrentRoom]) => {
        setMap(resRooms.data.map);
        setcurrentRoomData(resCurrentRoom.data);
        dispatch({ type: "UPDATE_CURRENT_ROOM", payload: resCurrentRoom.data });
      })
      .catch((err) => console.log(err));
  }, []);
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }
  return (
    <DashCon>
      <PixiApp
        rooms={map}
        currentRoomData={currentRoomData}
        dispatch={dispatch}
      />

      <RightCon>
        <GameInfoCon>
          <RoomInfo />
        </GameInfoCon>

        <Controls />
      </RightCon>
    </DashCon>
  );
};

export default UserDashboard;
