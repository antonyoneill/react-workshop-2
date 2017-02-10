import React, { Component } from 'react'

export default class Exercise extends Component {
  render() {
    return (
      <div>
        <p>Rendered <code>WrappedComponent</code></p>
        <WrappedComponent a={1} b={2} />
      </div>
    )
  }

}

class MyComponent extends Component {
  render() {
    return (
      <div>
        <p>Got given props:</p>
        <pre><code>{JSON.stringify(this.props, null, 4)}</code></pre>
      </div>
    )
  }
}

const wrapWithSpecialProp = function(CustomComponent) {
  const specialSecretValue = 'foo'
  return props => <CustomComponent {...props} specialProp={specialSecretValue} />
}

const WrappedComponent = wrapWithSpecialProp(MyComponent)
