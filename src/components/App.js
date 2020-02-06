import React, { Fragment } from 'react';
import Navigation from './navigation/Navigation';

// import Statistics from "./Statistics/Statistics";
import FriendsList from './friends-list/FriendsList';
// import TransactionHistory from "./TransactionHistory/TransactionHistory";

// import user from "./Profile/user.json";
// import statisticalData from "./Statistics/statistical-data.json";
import friends from './friends-list/friends.json';
// import transactions from "./TransactionHistory/transactions.json";
import './base.scss';

const tasks = ['friends list', 'statistics', 'transaction history'];

const App = () => (
  <Fragment>
    <Navigation tasks={tasks} />
    <div className="container">
      {/* <Profile user={user} /> */}
      {/* <Statistics title="Upload stats" stats={statisticalData} /> */}
      <FriendsList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  </Fragment>
);

export default App;
