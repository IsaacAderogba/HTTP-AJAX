import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Friend = ({ friend, selectFriend, deleteFriend }) => {
  return (
    <StyledFriend id={friend.id} onClick={() => selectFriend(friend.id)}>
        <p><Link to="/friends_builder">{friend.name}</Link></p>
        <p><Link to="/friends_builder">{friend.age}</Link></p>
        <p><Link to="/friends_builder">{friend.email}</Link></p>
        <p>
          <i onClick={() => deleteFriend(friend.id)} className="material-icons">
            delete
          </i>
        </p>
      </StyledFriend>
  );
};

const StyledFriend = styled.div`
cursor: pointer;
  p {
    background: ${props => (props.id % 2 !== 0 ? "#FAFAFA" : "#FFFFFF")}
    border-top: 1px solid #EAEAEA;

    i {
      cursor: pointer;
      color: #313131;
    }
  }

`;

export default Friend;
