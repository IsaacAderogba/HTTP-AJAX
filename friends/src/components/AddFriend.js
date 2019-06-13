import React, { useState } from "react";
import styled from "styled-components";

const AddFriend = ({ postNewFriend }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitForm = event => {
    event.preventDefault();
    postNewFriend(name, age, email);
    setName("");
    setAge("");
    setEmail("");
  };

  return (
    <StyledAddFriend onSubmit={onSubmitForm}>
      <h1>Add Friend</h1>
      <div>
        <p>Name:</p>
        <input
          required
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <p>Age:</p>
        <input
          required
          placeholder="Enter age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </div>
      <div>
        <p>Email:</p>
        <input
          placeholder="Enter email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <button>Add Friend</button>
    </StyledAddFriend>
  );
};

export default AddFriend;

const StyledAddFriend = styled.form`
    max-width: 400px;
    margin: 0 auto;
    div {
        display: flex;
        align-items: center;

        p {
            flex-basis: 100px;
        }

        input {
            flex-basis: 300px
            height: 20px;
            padding-left: 8px;
        }
    }

    button {
        width: 200px;
        padding: 8px 0px;
        font-size: 16px;
        background-color: black;
        color: white;
        border-radius: 4px;
    }
`;
