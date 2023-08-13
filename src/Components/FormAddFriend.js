import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
    const [friendName, setFriendName] = useState("");
    const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");
    const addFriendHandler = (friend) => {
        onAddFriend(friend);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!friendName || !imageUrl) return;
        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name: friendName,
            image: `${imageUrl}?=${id}`,
            balance: 0,
        };
        addFriendHandler(newFriend)
        setFriendName("")
        setImageUrl("https://i.pravatar.cc/48");
    };
    return (
        <form className='form-add-friend' onSubmit={handleSubmit}>
            <label>👫 Friend name</label>
            <input
                type='text'
                placeholder='Name'
                value={friendName}
                onChange={(e) => setFriendName(e.target.value)}
            />
            <label>🌅 Image URL</label>
            <input
                type='text'
                placeholder='Image URL'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />
            <Button>Add</Button>
        </form>
    );
};

export default FormAddFriend;
