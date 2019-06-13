import React from "react";
import styled from "styled-components";

const Friend = ({ friend, selectFriend, deleteFriend }) => {
  return (
    <StyledFriend id={friend.id} onClick={() => selectFriend(friend.id)}>
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
      <p>
        <i onClick={() => deleteFriend(friend.id)} className="material-icons">
          delete
        </i>
      </p>
    </StyledFriend>
  );
};

const StyledFriend = styled.div`
  p {
    background: ${props => (props.id % 2 !== 0 ? "#FAFAFA" : "#FFFFFF")}
    border-top: 1px solid #EAEAEA;

    i {
      cursor: pointer;
    }
  }

`;

export default Friend;
