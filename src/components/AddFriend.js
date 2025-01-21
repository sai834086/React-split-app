import { useState } from "react";

export default function AddFriend({
  setAddFriend,
  setOpenAddFreind,
  friendList,
  setFriendList,
}) {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newFriendList = {
      image: photo,
      name: name,
      balance: 0,
      id: friendList.length + 1,
    };
    setFriendList([...friendList, newFriendList]);
    setName("");
    setPhoto("");
    setOpenAddFreind(false);
  }
  return (
    <div>
      {setAddFriend ? (
        <div>
          <form className="addfriend-add" onSubmit={handleSubmit}>
            <div className="addfriend-form">
              <label>Friend Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="addfriend-form">
              <label>photo</label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
            <button className={`add-friend-btn`}>Add</button>
          </form>
          <button
            className={`add-friend-btn close-btn`}
            onClick={() => setOpenAddFreind(false)}
          >
            Close
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
