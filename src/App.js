import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Home } from './containers/Home/Home'
import { AppLayout } from './components/AppLayout/AppLayout'
import { Watch } from './containers/Watch/Watch'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppLayout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/watch' component={Watch} />
          </Switch>
        </AppLayout>
      </div>
    );
  }
}

export default App;
