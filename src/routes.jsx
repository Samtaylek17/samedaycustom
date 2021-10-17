import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';

const Dashboard = lazy(() => import('./pages/Dashboard'));

/**
 * Defines Application Routes
 * @function
 */

const Routes = () => {
  const styles = {
    margin: '20px 0',
    marginBottom: '20px',
    height: '100vh',
    padding: '20% 50%',
    TextAlign: 'center',
    borderRadius: '4px',
  };

  const Spinner = () => (
    <div style={styles}>
      <Spin size="large" />
    </div>
  );

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
