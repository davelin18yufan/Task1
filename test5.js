/** Can you explain the problem with the following code, and how to fix it. **/
class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.handleAddCount = this.handleAddCount.bind(this)
  }
  handleAddCount() {
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>{" "}
      </div>
    )
  }
}
ReactDOM.render(<Count />, document.getElementById("root"))

// state updates in React are asynchronous and can be batched, each setState doesn't immediately update this.state.count. Instead, React batches the updates, and the state value used in each setState call is the same as the initial value when the method was first called. Therefore, the count only increases by 1 instead of 3.
// To fix this, use the callback function which takes previous state as argument and return new state
function handleAddCount() {
  this.setState((prev) => ({ count: prev.count + 1 }));
  this.setState((prev) => ({ count: prev.count + 1 }));
  this.setState((prev) => ({ count: prev.count + 1 }));
}