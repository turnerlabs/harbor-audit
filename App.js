import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = React.createClass({

  getInitialState() {
    return {
      auditLogs: []
    }
  },

  componentDidMount() {
    fetch('http://shipit.services.dmtio.net/v1/logs/shipment/ams-research-audience-vision-web/environment/dev')
      .then(response => {
        return response.json()
      }).then(json => {
        this.setState({
          auditLogs: json
        })
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  },

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Harbor Audit</h2>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td>user</td>
                <td>updated</td>
                <td>diff</td>
              </tr>
            </thead>
            <tbody>
            {
              this.state.auditLogs.map((log, index) => {
                return (
                  <tr key={index}>
                    <td>{log.user}</td>
                    <td>{log.updated}</td>
                    <td>{log.diff}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>        
      </div>
    );
  }
})

export default App;
