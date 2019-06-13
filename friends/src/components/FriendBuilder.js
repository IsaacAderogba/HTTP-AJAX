import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FriendBuilder = ({ postNewFriend, selectedFriend, updateFriend }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(selectedFriend ? selectedFriend.name : "");
    setAge(selectedFriend ? selectedFriend.age : "");
    setEmail(selectedFriend ? selectedFriend.email : "");
  }, [selectedFriend]);

  const onSubmitForm = event => {
    event.preventDefault();
    if (selectedFriend) {
      updateFriend(selectedFriend.id, name, age, email);
    } else {
      postNewFriend(name, age, email);
    }
    setName("");
    setAge("");
    setEmail("");
  };

  return (
    <StyledAddFriend onSubmit={onSubmitForm}>
      {selectedFriend ? <h1>Update Friend</h1> : <h1>Add Friend</h1>}
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
      {selectedFriend ? <button>Update</button> : <button>Add</button>}
    </StyledAddFriend>
  );
};

export default FriendBuilder;

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
