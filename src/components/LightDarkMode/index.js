import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {light: true}

  isLight = () => {
    this.setState(prevState => ({light: !prevState.light}))
  }

  render() {
    const {light} = this.state

    return (
      <div className="main-container">
        <div className={light ? 'darkContain' : 'lightContain'}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.isLight}>
            {light ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
