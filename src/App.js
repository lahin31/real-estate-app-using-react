import React, { Component } from 'react'
import Layout from './containers/Layout/Layout'
import Houses from './containers/Houses/Houses'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Houses></Houses>
        </Layout>
      </div>
    );
  }
}

export default App;
