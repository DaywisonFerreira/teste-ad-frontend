import React from 'react';
import {Switch, Route} from 'react-router-dom';

import userList from '../pages/Users/List';
import userCreate from '../pages/Users/Create';
import userEdit from '../pages/Users/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={userList} />
      <Route path="/create" exact component={userCreate} />
      <Route path="/edit/:id" exact component={userEdit} />
    </Switch>
  );
}

