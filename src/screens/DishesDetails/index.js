import { Container } from 'native-base'
import React from 'react'
import * as rn from 'react-native'
import * as Services from '../../modules'

export default class DishesDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {}
    }
  }

  componentDidMount() {
    Services.getMealById(this.props.route.params.mealId).then(item => {
      this.setState({ item: item[0]})
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.item && prevState.item !== this.state.item) {
      console.log(this.state.item)
    }
  }

  render(){
    return (
      <Container>
        <rn.ImageBackground source={require('../../assets/paper1.png')} style={styles.background} />
      </Container>
    )
  }
}

const styles = rn.StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  container: {
    
  }
})
