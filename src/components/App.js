import React, { Fragment } from 'react';

import Navigation from './navigation/Navigation';
import Statistics from "./statistics/Statistics";
import FriendsList from './friends-list/FriendsList';
import TransactionHistory from "./transaction-history/TransactionHistory";

// import user from "./Profile/user.json";
import statisticalData from "./statistics/statistical-data.json";
import friends from './friends-list/friends.json';
import transactions from "./transaction-history/transactions.json";
import './base.scss';

const tasks = ['friends list', 'statistics', 'transaction history'];

const App = () => (
  <Fragment>
    <Navigation tasks={tasks} />
    <div className="container">
      {/* <Profile user={user} /> */}
      <Statistics title="Upload stats" statisticalData={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  </Fragment>
);

export default App;
