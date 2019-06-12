import React, { useState, useEffect } from "react";
import FriendList from "./components/FriendList";
import axios from "axios";
import "./App.css";

function App() {
  const [friends, setFriends] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchFriends = () => {
    setSpinner(true);
    axios
      .get("http://localhost:5000/friends")
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

  return (
    <div className="App">
      {spinner && <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {friends && <FriendList friends={friends} />}
    </div>
  );
}

export default App;
