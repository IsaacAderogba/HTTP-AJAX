import React from "react";

const Friend = ({friend}) => {
    return (
        <div>
          <span>{friend.name}</span>
          <span>{friend.age}</span>
          <span>{friend.email}</span>
        </div>
      );
}

export default Friend;