import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {configureStore} from './store/configureStore';
import App from './containers/App';
import HomeContainer from './containers/HomeContainer';
import TournamentContainer from './containers/TournamentContainer';
import TaskContainer from './containers/TaskContainer';
import TaskTrainContainer from './containers/TaskTrainContainer';
import ProfileContainer from './containers/ProfileContainer';
import LoginContainer from './containers/LoginContainer';

import rootSaga from './sagas';
import {userRequest} from './actions/action_creators/userActionCreators';

const store = configureStore();
store.runSaga(rootSaga);
store.dispatch(userRequest());

render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/profile" component={ProfileContainer} />
          <Route exact path="/:id" component={TournamentContainer} />
          <Route exact path="/:id/:taskId" component={TaskContainer} />
          <Route exact path="/:id/:taskId/train" component={TaskTrainContainer} />
          <Route path="*" component={HomeContainer} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);
