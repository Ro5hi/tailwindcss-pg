import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {

  const Home = React.lazy(() => import('./components/Home'))
  const Info = React.lazy(() => import('./components/Info'))
  const Contact = React.lazy(() => import('./components/Contact'))

  return (
    <div className="">
      <Suspense fallback={""}>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path='/' />
          <Route component={Info} path='/info' />
          <Route component={Contact} path='/contact' />
        </Switch>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
