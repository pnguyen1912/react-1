import React from "react";
import './App.css';


class App extends React.Component {
  state = {
    temp: "",
    availableList: [],
    wishList: []
  }

  checkinput = (event) => {
    if (event === '') {
      console.log('Cannot be empty')
      return false
    } else {
      for (let i = 0; i < this.state.availableList.length; i++) {
        if (event === this.state.availableList[i]) {
          console.log('Already in available list')
          return false
        }
      }
      for (let i = 0; i < this.state.wishList.length; i++) {
        if (event === this.state.wishList[i]) {
          console.log('Already in wish list')
          return false
        }
      }
      return true
    }
  }

  addToAvailable = () => {
    (this.checkinput(this.state.temp)) ?
      (this.setState({ availableList: [...this.state.availableList, this.state.temp] }, this.setState({ temp: '' }))) : (console.log('error'))
  }


  render() {
    return (
      <div className='App'>
        <h1>My Wish List</h1>

        <h3>Available Items: {this.state.availableList.length}
        </h3>
        <input placeholder='Type here' type="text" value={this.state.temp} onKeyDown={(e) => { if (e.key === 'Enter') { this.addToAvailable() } }} onChange={event => (this.setState({ temp: event.target.value }))} />
        <button onClick={this.addToAvailable}> Add to Available</button>
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
        <h3>My Wish List: {this.state.wishList.length}</h3>
        <ul>
          {this.state.wishList.map(item => {
            return (
              <div>
                <li>{item}
                  <button onClick={() => {
                    const index = this.state.wishList.indexOf(item)
                    const array = this.state.wishList.slice();
                    array.splice(index, 1)
                    this.setState({ availableList: [...this.state.availableList, item], wishList: array })
                  }}>Remove from Wish List</button></li>
              </div>
            )
          })}
        </ul>
      </div >
    )
  }
}

export default App