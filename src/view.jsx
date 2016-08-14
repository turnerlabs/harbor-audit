import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import ShipmentGroup from './ShipmentGroup.jsx'
import config from './config.js'

export default React.createClass({

  getInitialState() {
    return {
      data: []
    }
  },

  componentDidMount() {
    config(c => {
      fetch(c.shipItApi + 'v1/shipments')
        .then(response => response.json())
        .then(data => {
          //group dataset by "group"
          const groupedData = data
            .map(item => item.group)
            .reduce((acc, item, index, array) => {
              acc[item] = acc[item] || []
              acc[item].push(data[index])
              return acc
            }, {})
            
          this.setState({ data: groupedData })
        })
        .catch(ex => {
          console.error('parsing failed', ex)
        })
    })
  },

  render() {
    return (
      <div>
        <br />
        {
          Object.keys(this.state.data).map(group => 
            (
              <ShipmentGroup 
                key={group} 
                data={this.state.data} 
                group={group}
                shipments={this.state.data[group]} 
              />
            )
          )
        }
      </div>
    )
  }
})
