import React, { Component } from 'react'
import { render } from '@testing-library/react';

class EffectClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <p>クリック数: {this.state.count} 回</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          カウント +
      </button>
      </div >
    )
  }
}

export default EffectClass
