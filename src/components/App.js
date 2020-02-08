import React from 'react';

// import components
import Profile from './social-profile/Profile';
import Navigation from './navigation/Navigation';
import Statistics from "./statistics/Statistics";
import FriendsList from './friends-list/FriendsList';
import TransactionHistory from "./transaction-history/TransactionHistory";

// import data
import user from "./social-profile/user.json";
import statisticalData from "./statistics/statistical-data.json";
import friends from './friends-list/friends.json';
import transactions from "./transaction-history/transactions.json";
import './base.scss';

const tasks = ['profile', 'friends list', 'statistics', 'transaction history'];

const App = () => (
  <>
    <Navigation tasks={tasks} />
    <div className="container">
      <Profile user={user} />
      <Statistics title="Upload stats" statisticalData={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  </>
);

export default App;
