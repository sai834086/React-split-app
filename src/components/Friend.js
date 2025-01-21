import { use, useState } from "react";

export default function Friend({ friend, setSplitBillOpen, splitBillOpen }) {
  let message = "";

  if (friend.balance === 0) {
    message = "Add expense";
  } else if (friend.balance > 0) {
    message = friend.name + " owes you $" + friend.balance;
  } else {
    message = "You owe " + friend.name + " $" + Math.abs(friend.balance);
  }

  return (
    <div className="friend-each">
      <img src={friend.image} className="profile" alt="profile" />

      <div className="name-balance">
        <h3>{friend.name}</h3>
        <p className={friend.balance < 0 ? "negative-msg" : "positive-msg"}>
          {message}
        </p>
      </div>
      <div>
        {splitBillOpen === friend.id ? (
          <button
            className="select-btn"
            onClick={() => setSplitBillOpen(false)}
          >
            Close
          </button>
        ) : (
          <button
            className="select-btn"
            onClick={() => setSplitBillOpen(friend.id)}
          >
            Select
          </button>
        )}
      </div>
    </div>
  );
}
