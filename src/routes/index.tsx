import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Customers from '../pages/Customers';
import Users from '../pages/Users';
import Profits from '../pages/Profits';
import Expenses from '../pages/Expenses';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Layout>
      <Route path="/home" component={Home} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/users" component={Users} isPrivate />
      <Route path="/customers" component={Customers} isPrivate />
      <Route path="/profits" component={Profits} isPrivate />
      <Route path="/expenses" component={Expenses} isPrivate />
    </Layout>
  </Switch>
);

export default Routes;
