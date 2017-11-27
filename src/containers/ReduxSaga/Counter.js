import React from 'react'
import { connect } from 'react-redux'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button onClick={onIncrement}>
      Increment
        </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
        </button>
    {' '}
    <button onClick={onIncrementAsync}>
      Increment after 1 second
        </button>
    <hr />
    <div>
      Clicked: {value} times
        </div>
  </div>

const mapStateToProps = state => ({
  value: state
})

export default connect(
  mapStateToProps,
)(Counter)