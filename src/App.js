import React from "react";


class App extends React.Component {
  state = {
    temp: "",
    availableList: [],
    wishList: []
  }



  render() {
    return (
      <div>
        <h1>My Wish List</h1>
        <h3>Available Items</h3>
        <input placeholder='Type here' type="text" value={this.state.temp} onChange={event => (this.setState({ temp: event.target.value }))} />
        <button onClick={() => { (this.state.temp !== '') ? (this.setState({ availableList: [...this.state.availableList, this.state.temp] }, this.setState({ temp: '' }))) : (console.log('error')) }}>Add to Available</button>
        <ul>
          {this.state.availableList.map(item => {
            return (
              <div>
                <li>{item}
                  <button onClick={() => {
                    const index = this.state.availableList.indexOf(item)
                    const array = this.state.availableList.slice();
                    array.splice(index, 1)
                    this.setState({ wishList: [...this.state.wishList, item], availableList: array })
                  }} >Add to Wish List</button></li>
              </div>
            )
          })}
        </ul>
        <h3>My Wish List</h3>
        <ul>
          {this.state.wishList.map(item => {
            return (
              <div>
                <li>{item}
                  <button onClick={() => { this.setState({ availableList: [...this.state.availableList, item], wishList: this.state.wishList.filter(e => e !== item) }) }}>Remove from Wish List</button></li>
              </div>
            )
          })}
        </ul>
      </div >
    )
  }
}

export default App