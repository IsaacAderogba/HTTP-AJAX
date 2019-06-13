import React from "react";
import styled from "styled-components";
import Friend from "./Friend";

const FriendList = ({ friends, selectFriend }) => {
  console.log(friends);
  return (
    <StyledFriendList >
      <h1>Friends List</h1>
      <div className="headings">
        <p>Name</p>
        <p>Age</p>
        <p>Email</p>
        <p></p>
      </div>
      {friends.map(friend => {
        return <Friend  selectFriend={selectFriend} friend={friend} key={friend.id} />;
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
      margin: 0;
      padding: 12px 0px;
    }
  }
  .headings p {
    font-weight: bold;
  }
`;

export default FriendList;
