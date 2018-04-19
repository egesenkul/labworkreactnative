import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Picker
} from 'react-native';


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Classroom/>
            </View>
        );
    }
}

export class LightBulb extends Component{
    render(){
        let ege = this.props.isLit ? "ON" : "OFF";
        let ViewStyle = this.props.isLit ? styles.red : styles.green;
        return(
            <View style={ViewStyle}>
                <Text>{ege}</Text>
            </View>
        )
    }
}

export class Classroom extends Component {
    constructor(props){
        super(props);
        this.state = {isLightOn:false,lightColor:'red'}
        this.ButtonChange = this.ButtonChange.bind(this);
    }
    ButtonChange(){
        this.setState(previousState => {
            return { isLightOn: !previousState.isLightOn };
        })
    }

    render(){
        return(
            <View style={styles.blue}>
                <LightBulb isLit={this.state.isLightOn}/>
                <LightButton isLightOn={this.state.isLightOn} onButtonPress={this.ButtonChange}/>
            </View>
        )
    }
}

export class LightButton extends Component{

    render(){
        let fonksyion=this.props.onButtonPress;
        let riza = this.props.isLightOn ? "Turn off" : "Turn on";
        let ViewStyle = this.props.isLightOn ? styles.green : styles.red;
        return(
            <View style={styles.red}>
                <Button title={riza} color='white' onPress={fonksyion}>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    green:{
        padding:5,
        backgroundColor:'green',
    },
    red:{
        backgroundColor:'red',
        padding:5,
    },
    blue: {
        backgroundColor:'blue',
        padding:5,
    }
});