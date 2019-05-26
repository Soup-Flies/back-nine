import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from '../home/containers/Home.jsx'



export const MainRoutes = () => (
    <Switch>
        <Route path="/" component={Home} />
    </Switch>
)


export default MainRoutes;