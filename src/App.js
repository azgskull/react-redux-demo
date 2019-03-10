import React, { Component } from 'react';

import Counter from './components/Counter'
import Controls from './components/Controls'
import HistoryCounter from './components/HistoryCounter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
        <hr/>
        <Controls></Controls>
        <hr/>
        <HistoryCounter></HistoryCounter>
      </div>
    );
  }
}

export default App;
