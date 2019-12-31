import React from 'react';
import { Home } from './containers/Home/Home'
import { AppLayout } from './components/AppLayout/AppLayout'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppLayout>
          <Home />
        </AppLayout>
      </div>
    );
  }
}

export default App;
