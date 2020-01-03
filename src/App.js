import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './containers/Home/Home'
import { AppLayout } from './components/AppLayout/AppLayout'
import Watch from './containers/Watch/Watch'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { youtubeLibraryLoaded } from './store/actions/api'
import API_KEY from './store/api/key'
// const API_KEY = 'AIzaSyDsyKXDgcXwO7tc-26YUcPQnDQiSgJoJSs'

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

  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ youtubeLibraryLoaded }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));
