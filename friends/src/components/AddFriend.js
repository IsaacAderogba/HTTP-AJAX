import React from "react";
import styled from "styled-components";

const AddFriend = () => {
  return (
    <StyledAddFriend>
      <h1>Add Friend</h1>
      <div>
          <p>Name:</p>
          <input />
      </div>
      <div>
          <p>Age:</p>
          <input />
      </div>
      <div>
          <p>Email:</p>
          <input />
      </div>
    </StyledAddFriend>
  );
};

export default AddFriend;

const StyledAddFriend = styled.div`
`
