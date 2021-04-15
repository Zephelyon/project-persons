import React from 'react';

const DashBoard = React.lazy(() => import('../views/DashBoard/DashBoard'));
const profilePerson = React.lazy(() => import('../views/DashBoard/profilePerson'));

const routes = [
    { path: '/', exact: true, name: '', component: DashBoard },
    { path: '/profile', exact: true, name: 'Person Profile', component: profilePerson },
]

export default routes;