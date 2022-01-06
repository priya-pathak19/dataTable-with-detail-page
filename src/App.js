import { Route, Switch, Redirect } from 'react-router-dom';
import UsersTable from './components/UsersTable';
import UserDetail from './components/UserDetail';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/user' />
        </Route>
        <Route path='/user' exact>
          <UsersTable />
        </Route>
        <Route path='/user/:userId'>
          <UserDetail />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
