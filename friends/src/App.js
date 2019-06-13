import React, { useState, useEffect } from "react";
import FriendList from "./components/FriendList";
import AddFriend from './components/AddFriend';
import axios from "axios";
import "./App.css";

const friendsApi = "http://localhost:5000/friends";
function App() {
  const [friends, setFriends] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

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

 

  useEffect(() => {
    fetchFriends();
  }, []);

  const postNewFriend = (name, age, email) => {
    const newFriend = {name, age, email}
    axios.post(friendsApi, newFriend)
      .then(() => fetchFriends());
  }

  return (
    <div className="App">
      {spinner && <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {friends && <FriendList friends={friends} />}
      <hr />
      <AddFriend postNewFriend={postNewFriend} />
    </div>
  );
}

export default App;
