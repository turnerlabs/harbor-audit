import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';

export default React.createClass({
  render() {
    return (
      <div>
        <br/>
        <CircularProgress mode="indeterminate" />
      </div>
    );
  }
});
