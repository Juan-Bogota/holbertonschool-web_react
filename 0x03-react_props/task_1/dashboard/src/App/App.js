import React, { Fragment } from 'react';
import { Header } from '../Header/Header';
import { Login } from '../Login/Login';
import { Footer } from '../Footer/Footer';
import { Notifications } from '../Notifications/Notifications';

export const App = () => {
  return (
    <Fragment>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}
