import { useState } from "react";

export default function SplitWithFriend({
  setSplitBillOpen,
  splitBillOpen,
  friendList,
  setFriendList,
}) {
  const [bill, setBill] = useState(0);
  const [myBill, SetMyBill] = useState(0);
  const [friendExpense, setfriendExpense] = useState(0);
  const [whoPaid, setWhoPaid] = useState("You");

  let value = bill - myBill;
  let friend = [];
  if (splitBillOpen) {
    friend = friendList.filter((list) => list.id === splitBillOpen)[0];
  }

  let name = friend.name;
  let newBalance = friend.balance;

  console.log(friend);

  function handleBalance(e) {
    e.preventDefault();
    if (whoPaid === "You") {
      newBalance += value;
    } else {
      newBalance -= myBill;
    }

    setBill(0);
    SetMyBill(0);
    setFriendList(
      friendList.map((friend) =>
        friend.id === splitBillOpen
          ? { ...friend, balance: newBalance }
          : friend
      )
    );

    setSplitBillOpen(false);
  }

  return (
    <div>
      {splitBillOpen && (
        <form className="split-with-friend" onSubmit={(e) => handleBalance(e)}>
          <h3>Slit a bill with {friend.name}</h3>
          <div className="split-form">
            <label>Bill value</label>
            <input
              type="text"
              className="bill-input"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
            />
          </div>
          <div className="split-form">
            <label>Your expense</label>
            <input
              type="text"
              className="your-input"
              value={myBill}
              onChange={(e) => SetMyBill(Number(e.target.value))}
            />
          </div>
          <div className="split-form">
            <label>{name} expense:</label>
            <input
              type="text"
              className="friend-input"
              value={bill - myBill}
              disabled
              onChange={(e) => setfriendExpense(e.target.value)}
            />
          </div>
          <div className={`split-form split-select-form`}>
            <label>Who is paying the bill?</label>
            <select
              className="select-bill"
              value={whoPaid}
              onChange={(e) => setWhoPaid(e.target.value)}
            >
              <option>You</option>
              <option>{name}</option>
            </select>
          </div>
          <button className={` split-btn`}>Split bill</button>
        </form>
      )}
    </div>
  );
}
