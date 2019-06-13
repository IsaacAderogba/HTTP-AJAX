import React from "react";

const Friend = ({friend, selectFriend}) => {
    return (
        <div onClick={() => selectFriend(friend.id)}>
          <p>{friend.name}</p>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>
      );
}

export default Friend;