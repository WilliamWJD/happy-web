import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import CreateOrphanage from '../pages/CreateOrphanage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" exact component={OrphanagesMap} />
        <Route path="/create/orphanage" exact component={CreateOrphanage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
