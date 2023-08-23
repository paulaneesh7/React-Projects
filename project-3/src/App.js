import { useState } from "react";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

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
    name: "Jack",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null); // by default null means no friend is selected

  const handleShowAddFriend = function () {
    setShowAddFriend((show) => !show);
  };

  // friend object as parameter, basically we are adding the new friend object with the previous objects through SPREAD
  // This is exactly how new arrays are created along with adding new elements to it (don't used push() method)
  const handleAddFriend = function (friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  // All this function does is, whatever friend object it recieves it makes it the selectedFriend at the moment and so it's name is displayed
  const handleSelection = function (friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((currSelected) =>
      currSelected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  };

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null); // to close the split bill form once it's paid
  }

  return (
    <>
      <h1 className="header">Split Your Bill</h1>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friends={friends}
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
          />

          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>

        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}

export default App;
