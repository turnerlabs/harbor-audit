let configData = null

export default callback => {
  if (configData !== null)
    callback(configData)
  else {
    fetch('config')
      .then(res => res.json())
      .then(data => {
        configData = data
        callback(data)
      })
      .catch(ex => {
        console.error('error fetching config', ex)
      })
  }
}