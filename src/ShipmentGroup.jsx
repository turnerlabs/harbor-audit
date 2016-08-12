import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import Shipment from './Shipment.jsx'

export default React.createClass({
  render() {
    return (
      <Card initiallyExpanded={false}>
        <CardHeader
          title={this.props.group}
          subtitle=""
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          {this.props.shipments.map(shipment => 
            <Shipment key={shipment.name} shipment={shipment} />)}
        </CardText>
      </Card>      
    )
  }
})