import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import CreateOrphanage from '../pages/CreateOrphanage';
import Orphanage from '../pages/Orphanage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" exact component={OrphanagesMap} />
        <Route
          path="/create/orphanage/:lat,:lgnt"
          exact
          component={CreateOrphanage}
        />
        <Route path="/orphanage/:id" exact component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
