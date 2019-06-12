import React from "react";
import styled from "styled-components";
import Friend from "./Friend";

const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      <h1>Friends List</h1>
      <div className="headings">
        <p>Name</p>
        <p>Age</p>
        <p>Email</p>
      </div>
      {friends.map(friend => {
        return <Friend friend={friend} key={friend.id} />;
      })}
    </StyledFriendList>
  );
};

const StyledFriendList = styled.div`
  div {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    p {
      flex: 1;
      text-align: center;
      margin-bottom: 8px;
    }
  }
  .headings p {
    font-weight: bold;
  }
`;

export default FriendList;
