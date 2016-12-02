import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import ShipmentGroup from './shipmentgroup.jsx'
import config from './config.js'
import Spinner from './spinner.jsx'
import TextField from 'material-ui/TextField'
import sortBy from 'sort-by'

export default React.createClass({

  getInitialState() {
    return {      
      fetchingData: true,
      data: [],
      groupedData: [],
      searchString: '',
    }
  },

  componentDidMount() {
    config(c => {
      fetch(c.shipItApi + 'v1/shipments')
        .then(response => response.json())
        .then(data => {
          //group dataset by "group"
          const groupedData = data
            .sort(sortBy('group'))
            .map(item => item.group)
            .reduce((acc, item, index, array) => {
              acc[item] = acc[item] || []
              acc[item].push(data[index])
              return acc
            }, {})
            
          this.setState({ 
            data, 
            groupedData,
            fetchingData: false,
          })
        })
        .catch(ex => {
          console.error('parsing failed', ex)
        })
    })
  },

  handleChange(event) {
    this.setState({
      searchString: event.target.value,
    })
  },

  render() {
    const { fetchingData, groupedData, searchString } = this.state

    if (fetchingData)
      return <Spinner /> 

    return (
      <div>
        <TextField
          floatingLabelText="find shipment"
          onChange={this.handleChange}
        />
        <br /><br />
        {
          Object.keys(groupedData).map(group => 
            (
              <ShipmentGroup 
                key={group} 
                data={groupedData} 
                group={group}
                shipments={groupedData[group]} 
                searchString={searchString}
              />
            )
          )
        }
      </div>
    )
  }
})
