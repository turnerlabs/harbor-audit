import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import moment from 'moment'

export default React.createClass({

  getInitialState() {
    return {
      expanded: false,
      haventFetched: true,
      data: []
    }
  },

  handleExpandChange() {
    if (!this.state.expanded && this.state.haventFetched) {
      const url = 'http://shipit.services.dmtio.net/v1/logs/shipment/' + this.props.shipment + '/environment/' + this.props.env
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({ data })
        })
        .catch(ex => {
          console.error('parsing failed', ex)
        })
    }

    //toggle state
    this.setState({
      expanded: !this.state.expanded,
      haventFetched: false
    })
  },

  render() {
    return (
      <Card initiallyExpanded={false} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={this.props.env}
          subtitle=""
          showExpandableButton={true}
          actAsExpander={true}
        />
        <CardText expandable={true}>
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Time</TableHeaderColumn>
                <TableHeaderColumn>User</TableHeaderColumn>
                <TableHeaderColumn>Change</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.state.data.map((item, index) => 
                <TableRow key={index}>
                  <TableRowColumn>{moment(item.updated).fromNow()}</TableRowColumn>
                  <TableRowColumn>{item.user}</TableRowColumn>
                  <TableRowColumn>{item.diff}</TableRowColumn>
                </TableRow> 
              )}
            </TableBody>
          </Table>
          
        </CardText>
      </Card>      
    )
  }
})