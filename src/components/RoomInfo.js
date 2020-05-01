import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Pusher from "pusher-js";
const pusher = new Pusher(process.env.REACT_APP_APP_KEY, {
  cluster: process.env.REACT_APP_APP_CLUSTER,
});
function handleBroadcast(newBroadcast, old, setter) {
  setter([...old, newBroadcast.message]);
}
let channel;
export function RoomInfo({ title, description, players, uuid }) {
  const [broadcasts, setBroadcasts] = useState([]);
  useEffect(() => {
    channel = pusher.subscribe(`p-channel-${uuid}`);
    channel.bind("broadcast", (newBroadcast) =>
      handleBroadcast(newBroadcast, broadcasts, setBroadcasts)
    );
  }, [uuid, handleBroadcast]);
  return (
    <div>
      <span>Room title:</span>
      {`${title}`}
      <br />
      <span>Room description:</span>
      {description}
      <br />
      <span>Other players:</span>
      {players.join(", ")}
      <br />
      {broadcasts.map((message, index) => (
        <p key={message + index}>{message}</p>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  const { title, description, players, uuid } = state.playerState;
  return {
    title,
    description,
    players,
    uuid,
  };
};

export default connect(mapStateToProps, {})(RoomInfo);
