import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import Shipment from './shipment'

export default React.createClass({

  getInitialState() {
    return {
      expanded: false,
      userSetExpanded: false,
      newSearch: false,
    }
  },

  componentWillReceiveProps(nextProps) {
    //change the state if this is a new search
    if (this.props.searchString !== nextProps.searchString)
      this.setState({ 
        newSearch: true,
        userSetExpanded: false,
      })
  },

  onExpandChange(newExpandedState) {
    this.setState({ 
      expanded: newExpandedState,
      userSetExpanded: true,
    })
  },

  render() {    
    let { group, shipments, searchString } = this.props
    let { expanded, userSetExpanded, newSearch } = this.state

    //filter by search string
    if (searchString && searchString.length > 1) {
      shipments = shipments.filter(s => s.name.indexOf(searchString) > -1)
    }

    //don't render card if there are no search results
    if (shipments.length === 0)
      return <div />

    //automatically expand card if there are new search results
    //and user hasn't manually clicked to expand yet
    if (searchString.length > 1 && newSearch && !userSetExpanded)
      expanded = true

    return (
      <Card 
        initiallyExpanded={false}
        expanded={expanded} 
        onExpandChange={this.onExpandChange}>        
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