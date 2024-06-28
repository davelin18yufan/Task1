/** Please write the sample code to debounce handleOnChange **/
var SearchBox = React.createClass({
  getInitialState: function () {
    return { query: "" }
  },

  handleOnChange: async function (event) {
    // make ajax call
    console.log('API call', event.target.value)
    this.setState({ query: event.target.value })
  },

  // useEffect
  componentDidMount: function () {
    this.debouncedHandleOnChange = debounced(this.handleOnChange, 300) 
  },
  
  render: function () {
    return (
      <input type="search" name="p" onChange={this.debouncedHandleOnChange} />
    )
  },
})

function debounced(callback, delay = 300){
  // store this reference
  const context = this
  // initialize timer
  let timer = null

  return function(...args){
    // if there's a pending invocation, cancel existing timer and schedule a new one
    clearTimeout(timer ?? undefined)

    timer = setTimeout(() => {
      callback.apply(context, args)
    }, delay)
  }
}
