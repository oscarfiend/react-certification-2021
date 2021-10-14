import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import VideoDetails from '../../pages/Details';
import GlobalStyle from '../../utils/globalStyles.styled';
import ThemeContext from '../../context/theme/themeContext';

function App() {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  return (
    <BrowserRouter>
      <GlobalStyle theme={theme} />
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
      </Layout>
    </BrowserRouter>
  );
}

export default App;
