import { Container } from 'native-base'
import React from 'react'
import * as rn from 'react-native'

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Container>
        <rn.View>
          <rn.Text>Search Screen</rn.Text>
        </rn.View>
      </Container>
    )
  }
}