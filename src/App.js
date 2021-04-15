import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
const DefaultLayout = React.lazy(() => import('./layouts/DefaultLayout'));

const App = ({props}) => {

    const loading = () => <div className="animate__animated animate__fadeIn">Loading</div>
    const routes = (
        <Switch>
            <Route  path="/" name="home" render={props => <DefaultLayout {...props} />} />
        </Switch>
    );
    return (
        <React.Suspense fallback={loading()}>
            <BrowserRouter>
                {routes}
            </BrowserRouter>
      </React.Suspense>
    )
}



export default App;