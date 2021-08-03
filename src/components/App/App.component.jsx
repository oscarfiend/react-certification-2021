import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import VideoDetails from '../../pages/Details/VideoDetails.page';

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/video/:id">
              <VideoDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <Fortune /> */}
        </Layout>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;
