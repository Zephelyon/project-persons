import React from 'react';
import routes from '../routes';
import {Container} from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
const DefaultLayout = (props) => {
    return (
        <React.Fragment>
            <Container fluid>
                <Switch>
                    {routes.map((route, idx) => {
                            return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                <route.component {...props} />
                                )} />
                            ) : (null);
                    })}
                </Switch>
            </Container>
        </React.Fragment>
    );
}


export default DefaultLayout;