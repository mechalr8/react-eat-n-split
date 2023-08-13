import React from "react";
import Friend from "./Friend";

const FriendsList = ({ friendsList, onSelection, selectedFriend }) => {
    return (
        <ul>
            {friendsList.map((friend) => {
                return (
                    <Friend
                        key={friend.id}
                        friend={friend}
                        onSelection={onSelection}
                        selectedFriend={selectedFriend}
                    />
                );
            })}
        </ul>
    );
};

export default FriendsList;
