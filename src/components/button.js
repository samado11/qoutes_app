import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation'
import I18n from 'react-native-i18n';

class But extends Component {
    goToScreen =(screenName, lang) => {
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
            <TouchableOpacity onPress={() => this.goToScreen(this.props.goTo,this.props.lang)} style={{ backgroundColor: this.props.color, borderRadius: 6, height: 60, elevation: 5 }}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.text}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        alignSelf: "center",
        top: 18,
        fontSize: 18,
        fontFamily:'Cairo-Regular'
    },
});

export default But