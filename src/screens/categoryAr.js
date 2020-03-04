import React, { Component } from 'react'; 
import { StyleSheet, View, Text, TouchableOpacity,Image, Dimensions } from 'react-native';
import CustomButton from '../components/button'
const {width,height}=Dimensions.get('window')
class Ar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                <CustomButton goTo='arabic' lang="loveAr"  color="#A7414A" name="حب"/>
                </View>
                <View style={styles.button}>
                <CustomButton goTo='arabic' lang="forakAr" color="#282726" name="فراق"/>
                </View>

                <View style={styles.button}>                      
                <CustomButton goTo='arabic' lang="ghadrAr" color="#A37C27" name="غدر"/>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:width*0.06,
        flexDirection:"column",
        flex:1,
        justifyContent:"center",
        backgroundColor:"#132226"
        
    },
    button:{
        marginTop:height*0.02,
        
        
    },
    
});

export default Ar