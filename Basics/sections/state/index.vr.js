import React, { Component } from 'react'

import {
  AppRegistry,
  asset,
  Pano,
  View,
  Text
} from 'react-vr'

export default class Basics extends Component {
  constructor() {
      // required to inherat the parent to be able to access this scope
      super()

      // default state
      this.state = {
        showSign: true
      }

      // js function that receives 2 params (function and a number)
      setInterval(() => this.setState({showSign: !this.state.showSign}), 1000)
  }

  render() {
    let message = this.state.showSign === true
      ?  'Welcome to VR land!!'
      : ' '

    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}></Pano>
        <Text
          style={{fontSize: 0.1, transform:[{translate: [-1, 0, -2]}]}}>
            {message}
          </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('Basics', () => Basics)
