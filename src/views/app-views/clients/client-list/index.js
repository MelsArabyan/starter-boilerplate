import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Clients = ({ match }) => {
  console.log(match.url, 'xaaxa')
  return(
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/all`} />
      <Route path={`${match.url}/all`} component={lazy(() => import(`./UserList`))} />
      <Route path={`${match.url}/:id`} component={lazy(() => import(`./settings`))} />
    </Switch>
  </Suspense>
)};

export default Clients;