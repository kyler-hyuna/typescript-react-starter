import React from 'react'
const Image = require('../assets/image.jpg')
import value from '../assets/names.json'

interface Props {
  dog?: string
}

interface State {
  counter: number
}

class App extends React.Component<Props, State> {
  state = {
    counter: 0,
  }

  render() {
    return (
      <>
        <h1>{this.state.counter} new react projects</h1>

        {value.names.map((a: string) => <p key={a}>{a}</p>)}

        <img src={Image} alt="" />

        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Hey
        </button>
      </>
    )
  }
}
export default App
