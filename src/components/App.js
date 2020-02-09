import React, { useState } from 'react';

import Navigation from './navigation/Navigation';
import Content from './content/Content';
import './base.scss';

const tasks = ['profile', 'friends list', 'statistics', 'transaction history'];

const App = () => {
  const [page, setPage] = useState({
    value: 'page_1',
  });

  return (
    <>
      <Navigation props={{tasks, page, setPage}} />
      <Content page={page} />
    </>
  );
};

export default App;
