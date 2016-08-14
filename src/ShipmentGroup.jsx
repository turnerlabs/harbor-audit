import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import Shipment from './shipment.jsx'

export default React.createClass({  
  render() {    
    let { group, shipments, searchString } = this.props

    //filter by search string
    if (searchString && searchString.length > 1) {
      shipments = shipments.filter(s => s.name.indexOf(searchString) > -1)
    }

    if (shipments.length === 0)
      return <div />

    return (
      <Card 
        initiallyExpanded={false} 
        expanded={(searchString.length > 1)}>
        <CardHeader
          title={group}
          subtitle=""
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          {shipments.map(shipment => 
            <Shipment key={shipment.name} shipment={shipment} />)}
        </CardText>
      </Card>      
    )
  }
})