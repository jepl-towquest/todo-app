import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  static getDerivedStateFromProps(props, state) {
    // return the new, updated state based on props
  }

  getSnapshotBeforeUpdate() {
    // Create a backup of the current way things are
  }

  // componentWillMount() {
  //   // DEPRECATED 
  // }

  componentDidMount() {
    // Called once when the component is first loaded to the screen
    // Typically used to fetch data from an API or data source
  }

  // componentWillReceiveProps(nextProps) {
  //   // DEPRECATED
  //   // Run whenever this component receives props from a parent
  //   // can check if the props are different and do something if so
  //   if (nextProps.whatever !== this.props.whatever) {
  //     // do something important
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // Add logic to check whether the component needs to update as react will update anyway
    // return true to update
    // return false to do nothing
  }

  // componentWillUpdate() {
  //   // DEPRECATED
  // }

  componentWillUnmount() {
    // tidy up anything that has been set up in the component
    // eg. event listeners
  }

  render() {
    return(
      <div>
        Code goes here
      </div>
    )
  }
}

export default App