import React from "react";
import styled from "styled-components";
import Friend from "./Friend";

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <StyledFriendList>
      <h1>Friends List</h1>
      {friends.map(friend => {
        return <Friend friend={friend} key={friend.id} />;
      })}
    </StyledFriendList>
  );
};

const StyledFriendList = styled.div`
  div {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default FriendList;
