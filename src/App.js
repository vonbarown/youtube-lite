import React from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav'
import SideBar from './containers/SideBar/SideBar'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <SideBar />
      </div>
    );
  }
}

export default App;
