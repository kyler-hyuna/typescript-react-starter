import React from 'react'
const Image = require('../../assets/image.jpg')
import value from '../../assets/names.json'

import * as actions from '@actions'
import { Store } from '@types'
import { connect, Dispatch } from 'react-redux'

interface ConnectedProps {
  counter: number
}

interface ConnectedDispatch {
  increment: () => void
}

type Props = ConnectedProps & ConnectedDispatch

export class App extends React.Component<Props> {
  render() {
    return (
      <>
        <h1>{this.props.counter} new react projects</h1>

        {value.names.map((a: string) => <p key={a}>{a}</p>)}

        <img src={Image} alt="" />

        <button onClick={this.props.increment}>Hey</button>
      </>
    )
  }
}

const mapStateToProps = (state: Store) => ({
  counter: state.counter,
})

const mapDispatchToProps = (dispatch: Dispatch<Store>) => ({
  increment: () => dispatch(actions.increment()),
})

export default connect<ConnectedProps, ConnectedDispatch, {}, Props>(
  mapStateToProps,
  mapDispatchToProps
)(App)
