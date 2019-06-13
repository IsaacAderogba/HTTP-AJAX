import React, { useState, useEffect } from "react";
import FriendList from "./components/FriendList";
import FriendBuilder from "./components/FriendBuilder";
import axios from "axios";
import "./App.css";

const friendsApi = "http://localhost:5000/friends";
function App() {
  const [friends, setFriends] = useState(null);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = () => {
    setSpinner(true);
    axios
      .get(friendsApi)
      .then(response => {
        setFriends(response.data);
      })
      .catch(error => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setSpinner(false);
      });
  };

  const selectFriend = id => {
    setSelectedFriend(friends.find(fr => fr.id === id));
  };

  const postNewFriend = (name, age, email) => {
    const newFriend = { name, age: parseInt(age), email };
    axios.post(friendsApi, newFriend).then(() => fetchFriends());
  };

  const updateFriend = (id, name, age, email) => {
    const updatedFriend = { name, age: parseInt(age), email };
    axios.put(`${friendsApi}/${id}`, updatedFriend).then(() => fetchFriends());
    setSelectedFriend(null);
  };

  const deleteFriend = id => {
    axios.delete(`${friendsApi}/${id}`).then(() => fetchFriends());
  };

  return (
    <div className="App">
      {spinner && <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {friends && (
        <FriendList
          friends={friends}
          selectFriend={selectFriend}
          deleteFriend={deleteFriend}
        />
      )}
      <hr />
      <FriendBuilder
        postNewFriend={postNewFriend}
        selectedFriend={selectedFriend}
        updateFriend={updateFriend}
      />
    </div>
  );
}

export default App;
