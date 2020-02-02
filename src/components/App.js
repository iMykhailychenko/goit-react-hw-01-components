import React from 'react';
// import Profile from "./Profile/Profile";
// import Statistics from "./Statistics/Statistics";
import FriendsList from './friends-list/FriendsList';
// import TransactionHistory from "./TransactionHistory/TransactionHistory";
// import user from "./Profile/user.json";
// import statisticalData from "./Statistics/statistical-data.json";
import friends from './friends-list/friends.json';
// import transactions from "./TransactionHistory/transactions.json";

const App = () => (
  <div>
    {/* <Profile user={user} /> */}
    {/* <Statistics title="Upload stats" stats={statisticalData} /> */}
    <FriendsList data={friends} />
    {/* <TransactionHistory items={transactions} /> */}
  </div>
);

export default App;
