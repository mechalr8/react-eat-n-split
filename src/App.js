import FormAddFriend from "./Components/FormAddFriend";
import FriendsList from "./Components/FriendsList";
import Button from "./Components/Button";
import FormSplitBill from "./Components/FormSplitBill";
import { useState } from "react";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

function App() {
    const [isFriendFormVisible, setIsFriendFormVisible] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);
    const toggleFriendForm = () => {
        setIsFriendFormVisible(!isFriendFormVisible);
    };
    const handleFriendSelect = (friend) => {
        setSelectedFriend(curr => curr?.id === friend.id ? null : friend)
        setIsFriendFormVisible(false)
    };
    const handleAddFriends = (friend) => {
        setFriends((friends) => [...friends, friend]);
        setIsFriendFormVisible(false);
    };
    const handleSplit = (value) => {
        setFriends(friends => friends.map(friend => friend.id === selectedFriend.id ? {...friend, balance: friend.balance+value }: friend))
        setSelectedFriend(null)
    }
    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendsList
                    friendsList={friends}
                    onSelection={handleFriendSelect}
                    selectedFriend={selectedFriend}
                />
                {isFriendFormVisible && (
                    <FormAddFriend onAddFriend={handleAddFriends} />
                )}
                <Button onClick={toggleFriendForm}>
                    {isFriendFormVisible ? "Close" : "Add Friend"}
                </Button>
            </div>
            {selectedFriend && (
                <FormSplitBill
                    key={selectedFriend.id}
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplit}
                />
            )}
        </div>
    );
}

export default App;
