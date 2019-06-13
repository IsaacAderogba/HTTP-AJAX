import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar";
import FriendList from "./components/FriendList";
import FriendBuilder from "./components/FriendBuilder";
import "./App.css";

const friendsApi = "http://localhost:5000/friends";
function App() {
  const [friends, setFriends] = useState(null);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [spinner, setSpinner] = useState(true);
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

  if (spinner) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <NavBar />

        {errorMessage && <div>{errorMessage}</div>}
        {friends && (
          <Route
            exact
            path="/"
            render={routeProps => (
              <FriendList
                {...routeProps}
                friends={friends}
                selectFriend={selectFriend}
                deleteFriend={deleteFriend}
              />
            )}
          />
        )}
        <Route
          path="/friends_builder"
          render={routeProps => (
            <FriendBuilder
              {...routeProps}
              postNewFriend={postNewFriend}
              selectedFriend={selectedFriend}
              updateFriend={updateFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
