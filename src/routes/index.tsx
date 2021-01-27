import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Layout from '../components/Layout';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Users from '../pages/Users';
import Customers from '../pages/Customers';
import Expenses from '../pages/Expenses';
import Revenue from '../pages/Revenue';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Layout>
      <Route path="/home" component={Home} isPrivate />
      <Route path="/users" component={Users} isPrivate />
      <Route path="/customers" component={Customers} isPrivate />
      <Route path="/expenses" component={Expenses} isPrivate />
      <Route path="/revenue" component={Revenue} isPrivate />
    </Layout>
  </Switch>
);

export default Routes;
