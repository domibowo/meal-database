import { Button, Container, Content } from "native-base";
import React from "react";
import * as rn from "react-native"
import * as Services from "../../modules"
import {AREA, CATEGORY} from "../../constants"
import RNShake from 'react-native-shake';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idRandom: '',
            imageRandom: '',
            nameRandom: '',
            categoryRandom: '',
            areaRandom: '',
            refreshing: false
        }
    }

    componentDidMount() {
        this.randomizeItem()
        this.shakeHandler = RNShake.addListener(() => {
            Services.getRandomItem().then(item => {
                this.setState({
                    idRandom: item[0].idMeal,
                    nameRandom: item[0].strMeal,
                    imageRandom: item[0].strMealThumb,
                    categoryRandom: item[0].strCategory,
                    areaRandom: item[0].strArea,
                    refreshing: false
                })
            })
        })
        this.backHandler = rn.BackHandler.addEventListener('hardwareBackPress', () => {
            rn.Alert.alert(
                'Alert!',
                'Are you sure you want to quit?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => rn.BackHandler.exitApp()
                    }
                ],
                {cancelable: false}
            )
        })
    }

    componentWillUnmount() {
        this.shakeHandler.remove()
        this.backHandler.remove()
    }

    randomizeItem() {
        this.setState({refreshing: true})
        Services.getRandomItem().then(item => {
            this.setState({
                idRandom: item[0].idMeal,
                nameRandom: item[0].strMeal,
                imageRandom: item[0].strMealThumb,
                categoryRandom: item[0].strCategory,
                areaRandom: item[0].strArea,
                refreshing: false
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {}

    onPressTitle = () => {
        this.props.navigation.navigate('DishesDetails', {mealId: this.state.idRandom})
    }

    onPressCategory = () => {
        Services.filterMeals(CATEGORY, this.state.categoryRandom).then(result => {
            console.log(result)
        })
    }

    onPressArea = () => {
        Services.filterMeals(AREA, this.state.areaRandom).then(result => {
            console.log(result)
        })
    }

    moreFoodAvailableButton = () => {
        this.props.navigation.navigate('SearchScreen')
    }

    renderContent() {
        return (
            <rn.ImageBackground source={{uri: this.state.imageRandom !== '' ? this.state.imageRandom : '#fff'}} style={styles.ImageBackground}>
                <rn.View style={styles.AppName}>
                    <rn.Image source={require('../../assets/logo.png')} style={{resizeMode:"cover"}}/>
                </rn.View>
                <rn.View style={styles.ImageText}>
                    <rn.Text onPress={() => this.onPressTitle()} style={styles.ImageTitle} ellipsizeMode="tail" numberOfLines={2}>{this.state.nameRandom}</rn.Text>
                    <rn.Text onPress={() => this.onPressCategory()}style={styles.ImageCategory}>{this.state.categoryRandom}</rn.Text>
                    <rn.Text onPress={() => this.onPressArea()} style={styles.ImageArea}>{this.state.areaRandom}</rn.Text>
                </rn.View>
                <rn.View style={styles.ButtomView}>
                    {/* <rn.Button title="Learn More" color="#FFAB4C"/> */}
                    <Button style={styles.ButtonLearn}>
                        <rn.Text style={styles.TextButton}>More Food Available</rn.Text>
                    </Button>
                </rn.View>
            </rn.ImageBackground>
        )
    }
    
    render() {
        return (
            <Container>
                <Content refreshControl={
                    <rn.RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.randomizeItem.bind(this)}
                    />
                }>
                    {this.renderContent()}
                </Content>
            </Container>
        )
    }
}

const styles = rn.StyleSheet.create({
    ImageBackground: {
        width: '100%',
        height: '100%',
    },
    ImageText: {
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        flex: 2,
        height: rn.Dimensions.get('screen').height * .3,
        marginTop: rn.Dimensions.get('screen').height * .3,
        marginBottom: rn.Dimensions.get('screen').height * .01,
        marginHorizontal: 10,
        borderRadius: 5
    },
    ImageTitle: {
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        // marginHorizontal: 10
    },
    ImageCategory: {
        fontSize: 30,
        fontWeight: '700'
    },
    ImageArea: {
        fontSize: 25,
        fontWeight: '500'
    },
    AppName: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'flex-start',
        // marginTop: rn.Dimensions.get("window").height * .20,
    },
    ButtomView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    ButtonLearn: {
        width: rn.Dimensions.get('screen').width * .5,
        justifyContent: 'center',
        backgroundColor: "#FFAB4C",
        elevation: 5,
        borderRadius: 5,
        marginBottom: 10
    },
    TextButton: {
        fontSize: 21,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    AppNameText: {
        fontSize: 50,
        fontStyle: 'italic'
    }

});