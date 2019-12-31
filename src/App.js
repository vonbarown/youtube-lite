import React from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav'
import SideBar from './containers/SideBar/SideBar'
import Home from './containers/Home/Home'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <SideBar />
      </div>
      <Home />
    );
  }
}

export default App;
