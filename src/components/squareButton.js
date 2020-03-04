

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity,Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation'
import I18n from 'react-native-i18n';
const {width,height}=Dimensions.get('window')

class But extends Component {
    goToScreen = (screenName, lang = I18n.currentLocale()) => {
        console.log(screenName);

        I18n.locale = lang;

        Navigation.push('AppStack', {
            component: {
                name: screenName
            }
        })
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.goToScreen(this.props.goTo,this.props.lang)} style={{ backgroundColor: this.props.color, borderRadius: 6, height:height*0.16,width:width*0.3 , elevation: 5 }}>
                <View style={styles.container}>
                <View style={styles.image}>
                <Image  source={this.props.img} />
                </View>
                <View >
                    <Text style={styles.text}>{this.props.name}</Text>
                </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        alignSelf: "center",
        
        fontSize: 18,
        fontFamily:'Cairo-Regular'
    },
    image:{
        // top: 18,
        alignSelf:"center",
        height:40
    },
    container:{
        top:height*0.03
    }
});

export default But




