import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Environment from './environment.jsx'

export default React.createClass({
  render() {
    return (
      <Card initiallyExpanded={false}>
        <CardHeader
          title={this.props.shipment.name}
          subtitle=""
          showExpandableButton={true}
          actAsExpander={true}
        />
        <CardText expandable={true}>
          {this.props.shipment.environments.map(env => 
            <Environment key={env} env={env} shipment={this.props.shipment.name} />)}
        </CardText>
      </Card>      
    )
  }
})