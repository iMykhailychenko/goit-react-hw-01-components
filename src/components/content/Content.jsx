import React from 'react';

// import components
import Profile from '../social-profile/Profile';
import Statistics from '../statistics/Statistics';
import FriendsList from '../friends-list/FriendsList';
import TransactionHistory from '../transaction-history/TransactionHistory';

// import data
import user from '../social-profile/user.json';
import statisticalData from '../statistics/statistical-data.json';
import friends from '../friends-list/friends.json';
import transactions from '../transaction-history/transactions.json';

function Content(props) {
  const { page } = props;
  const { value } = page;

  return (
    <div className="container">
      {value === 'page_1' && (
        <div className="center">
          <Profile user={user} />
        </div>
      )}
      {value === 'page_2' && <FriendsList friends={friends} />}
      {value === 'page_3' && (
        <Statistics title="Upload stats" statisticalData={statisticalData} />
      )}
      {value === 'page_4' && <TransactionHistory transactions={transactions} />}
    </div>
  );
}

export default Content;
