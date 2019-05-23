import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import LoginRoute from './Login'
import SignupRoute from './Signup'
import AccountRoute from './Account'
import NotFoundRoute from './NotFound'

// face-web
import FaceWebLayout from '../layouts/FaceWebLayout';
import DashboardRoute from './User/Dashboard';
import FormRoute from './User/Form';
import FormRoute1 from './User/Form1';

export default function createRoutes(store) {
  return (
    <FaceWebLayout>
      <Switch>
        <Route exact path={Home.path} component={Home.component} />
        {/* Build Route components from routeSettings */
        [
          AccountRoute,
          SignupRoute,
          LoginRoute,
          DashboardRoute,
          FormRoute,
	        FormRoute1
          /* Add More Routes Here */
        ].map((settings, index) => (
          <Route key={`Route-${index}`} {...settings} />
        ))}
        <Route component={NotFoundRoute.component} />
      </Switch>
    </FaceWebLayout>
  )
}
