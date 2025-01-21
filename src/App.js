import { use, useState } from "react";
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import SplitWithFriend from "./components/SplitWithFriend";

export default function App() {
  const [setAddFriend, setOpenAddFreind] = useState(false);
  const [friendList, setFriendList] = useState([]);
  const [splitBillOpen, setSplitBillOpen] = useState(false);

  return (
    <div className="main">
      <div className="friends-addfriends">
        <Friends
          friendList={friendList}
          setAddFriend={setAddFriend}
          setOpenAddFreind={setOpenAddFreind}
          setSplitBillOpen={setSplitBillOpen}
          splitBillOpen={splitBillOpen}
        />
        <AddFriend
          setAddFriend={setAddFriend}
          setOpenAddFreind={setOpenAddFreind}
          friendList={friendList}
          setFriendList={setFriendList}
        />
      </div>
      <div>
        <SplitWithFriend
          setSplitBillOpen={setSplitBillOpen}
          splitBillOpen={splitBillOpen}
          friendList={friendList}
          setFriendList={setFriendList}
        />
      </div>
    </div>
  );
}
