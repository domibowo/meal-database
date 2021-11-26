import { Container, Content } from 'native-base'
import React from 'react'
import * as rn from 'react-native'
import { ALPHABETH } from '../../constants'

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  getByFirstLetter() {
    return (
      ALPHABETH.map((key, index) => 
        <rn.TouchableOpacity style={styles.Alphabeth}>
          <rn.Text style={{fontWeight: 'bold', fontSize: 18, color: '#FFBC97'}}>{key}</rn.Text>
        </rn.TouchableOpacity>
      )
    )
  }

  render() {
    return (
      <Container>
        <Content style={styles.Content}>
          <rn.View style={styles.FirstLetter}>
            {this.getByFirstLetter()}
            <rn.TouchableOpacity style={{backgroundColor:'#FF782C', marginHorizontal: 10, borderRadius: 5, height: 30, width: 60, alignItems: 'center', justifyContent: 'center'}}>
              <rn.Text style={{fontWeight: '600', fontSize: 18, color: '#FFBC97'}}>Reset</rn.Text>
            </rn.TouchableOpacity>
          </rn.View>
        </Content>
      </Container>
    )
  }
}

const styles = rn.StyleSheet.create({
  Content: {
    backgroundColor:"#FFBC97"
  },
  FirstLetter: {
    flexWrap: 'wrap', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Alphabeth: {
    marginHorizontal: 10,
    backgroundColor: '#FF782C',
    height: 30, width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10
  }
})