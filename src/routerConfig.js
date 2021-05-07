import React,{ Component } from 'react';
import FrontendAuth from '@/components/FrontendAuth';
import routerMap from '@/components/routerMap';
import { HashRouter as Router, Switch } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
          <Router>
            <Switch>
              <FrontendAuth routerMap={routerMap}/>
            </Switch>
          </Router>
        )
    }
}




