import { useState } from "react";
import Friend from "./Friend";

export default function Friends({
  friendList,
  setAddFriend,
  setOpenAddFreind,
  setSplitBillOpen,
  splitBillOpen,
}) {
  let overallBalance = 0;
  let msg = "";
  let findExpense = false;
  friendList.forEach((friend) => {
    console.log("overall Balance :" + overallBalance);
    overallBalance += friend.balance;
    if (friend.balance !== 0) {
      findExpense = true;
    }
  });

  if (overallBalance > 0) {
    msg = "Overall, Your friends owes you";
  } else if (overallBalance < 0) {
    msg = "Overall, you owe";
  } else if (!findExpense) {
    msg = "Overall, No expenses";
  } else {
    msg = "Overall, Settle with your friends";
  }
  return (
    <div>
      <div className="friend-list-main">
        <h3>
          {msg} {overallBalance === 0 ? "" : "$" + Math.abs(overallBalance)}
        </h3>
        {friendList.length === 0 ? (
          <p>Add friends to List</p>
        ) : (
          <div className="friend-list">
            {friendList.map((friend) => (
              <Friend
                friend={friend}
                key={friend.id}
                setSplitBillOpen={setSplitBillOpen}
                splitBillOpen={splitBillOpen}
              />
            ))}
          </div>
        )}
      </div>
      {!setAddFriend && (
        <button
          className="add-friend-btn"
          onClick={() => {
            setOpenAddFreind(!setAddFriend);
          }}
        >
          Add Friend
        </button>
      )}
    </div>
  );
}
